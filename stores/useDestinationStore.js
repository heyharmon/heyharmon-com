import { defineStore } from 'pinia'

export const useDestinationStore = defineStore('destinations', () => {
    const cities = ref([
        {name: 'Salt Lake City', slug: 'salt-lake-city'},
        {name: 'West Valley', slug: 'west-valley'},
        {name: 'Provo', slug: 'provo'},
        {name: 'West Jordan', slug: 'west-jordan'},
        {name: 'Orem', slug: 'orem'},
        {name: 'Sandy', slug: 'sandy'},
        {name: 'Ogden', slug: 'ogden'},
        {name: 'St. George', slug: 'st-george'},
        {name: 'Layton', slug: 'layton'},
        {name: 'Taylorsville', slug: 'taylorsville'},
        {name: 'South Jordan', slug: 'south-jordan'},
        {name: 'Lehi', slug: 'lehi'},
        {name: 'Logan', slug: 'logan'},
        {name: 'Murray', slug: 'murray'},
        {name: 'Draper', slug: 'draper'},
        {name: 'Bountiful', slug: 'bountiful'},
        {name: 'Riverton', slug: 'riverton'},
        {name: 'Roy', slug: 'roy'},
    ])

    function getCityNameBySlug(slug) {
        let city = cities.value.find(city => city.slug === slug)
        return city.name
    }
  
    return { cities, getCityNameBySlug }
})