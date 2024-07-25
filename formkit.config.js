const config = {
  config: {
    rootClasses(sectionKey, node) {
      const type = node.props.type;
      const classConfig = {
        outer: '',
        legend: 'block mb-1 font-bold',
        label() {
          if (type === 'text') {
            return 'block text-xs leading-6 font-medium text-slate-900';
          }
          if (type === 'radio') {
            return 'text-xs leading-6 text-slate-900 mt-0.5';
          }
        },
        options() {
          if (type === 'radio') {
            return 'flex flex-col flex-grow mt-2';
          }
        },
        input() {
          if (type === 'text') {
            return 'block w-full rounded-md border-0 py-2 mt-1.5 text-slate-900 ring-1 ring-inset ring-gray-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 hover:bg-slate-50 sm:text-xs';
          }
          if (type === 'radio') {
            return 'mr-2';
          }
        },
        wrapper() {
          if (type === 'radio') {
            return 'flex flex-row flex-grow';
          }
        },
        message: 'text-red-500 text-xs',
        help: 'mt-3 text-xs leading-5 text-slate-500',
      };

      function createClassObject(classesArray) {
        if (!classesArray) return '';
        const classList = {};
        classesArray.split(' ').forEach((className) => {
          classList[className] = true;
        });
        return classList;
      }

      const target = classConfig[sectionKey];
      if (typeof target === 'string') {
        return createClassObject(target);
      } else if (typeof target === 'function') {
        return createClassObject(classConfig[sectionKey]());
      }
    },
  },
};

export default config;
