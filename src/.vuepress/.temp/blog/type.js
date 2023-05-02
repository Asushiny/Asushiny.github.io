export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-664c50ea","v-6188709e","v-6d58136e","v-56452198","v-87e1320a","v-2429a5dc","v-37e8cd69","v-147825fb","v-11b603de","v-2a1f0993"]},"/en/":{"path":"/en/article/","keys":[]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]},"/en/":{"path":"/en/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":["v-2a1f0993"]},"/en/":{"path":"/en/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]},"/en/":{"path":"/en/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-664c50ea","v-6188709e","v-6d58136e","v-56452198","v-87e1320a","v-2429a5dc","v-37e8cd69","v-147825fb"]},"/en/":{"path":"/en/timeline/","keys":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

