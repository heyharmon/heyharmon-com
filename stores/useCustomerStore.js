import { defineStore } from 'pinia'

export const useCustomerStore = defineStore('customer', () => {
    const { $shopify } = useNuxtApp()

    const checkoutId = useCookie('checkoutId')
    const cart = ref({})
    const isAddingToCart = ref(false)

    const itemFromShopify = ((item) => {
        return {
            checkoutLineItemId: item.id,
            quantity: item.quantity,
            title: item.title,
            variant: {
                id: item.variant.id,
                price: item.variant.priceV2.amount,
                product: {
                    id: item.variant.product.id,
                    handle: item.variant.product.handle,
                },
                image: {
                    altText: item.variant.image.altText,
                    src: item.variant.image.src
                }
            }
        }
    })

    const itemList = ((items) => {
        return items.map(item => {
            return itemFromShopify(item)
        })
    })

    const cartFromShopifyCheckout = ((checkout) => {
        let cart = {
            email: checkout.email,
            items: itemList(checkout.lineItems),
            itemsTotal: checkout.lineItemsSubtotalPrice.amount,
            total: checkout.totalPriceV2.amount,
            webUrl: checkout.webUrl,
        }

        return JSON.parse(JSON.stringify(cart))
    })

    async function fetchCheckout() {
        $shopify.checkout.fetch(checkoutId.value).then((checkout) => {
            cart.value = cartFromShopifyCheckout(checkout)

            console.log('fetched checkout: ', checkout)
            console.log('cart: ', cart.value)
        })
    }

    async function createCheckout() {
        $shopify.checkout.create().then((checkout) => {
            checkoutId.value = checkout.id
            console.log('new checkout: ', checkout)
        })
    }

    function addToCart(productVariantId) {
        console.log('checkout id', checkoutId.value)
        console.log('product variant id', productVariantId)

        isAddingToCart.value = true

        $shopify.checkout.addLineItems(checkoutId.value, [{
            variantId: productVariantId,
            quantity: 1,
            // customAttributes: [{key: "MyKey", value: "MyValue"}]
        }]).then(() => {
            isAddingToCart.value = false
            fetchCheckout()
        })
    }

    function removeFromCart(checkoutLineItemId) {
        console.log('checkout id', checkoutId.value)
        console.log('checkout line item id', checkoutLineItemId)

        $shopify.checkout.removeLineItems(checkoutId.value, [checkoutLineItemId]).then(() => {
            fetchCheckout()
        })
    }

    const inCartCount = computed(() => {
        return (productId) => {
            console.log('counting product id: ', productId)
            return cart.value.items?.filter(item => item.variant.product.id === productId).length
        }
    })

    const inCart = computed(() => {
        return (productId) => {
            return cart.value.items?.filter(item => item.variant.product.id === productId).length > 0
        }
    })

    onMounted(() => {
        console.log('checkout id', checkoutId.value)

        if (checkoutId.value) {
            fetchCheckout()
        } else {
            createCheckout()
        }
    })
  
    return { 
        checkoutId,
        cart, 
        isAddingToCart,
        addToCart,
        removeFromCart,
        inCartCount, 
        inCart,
    }
})