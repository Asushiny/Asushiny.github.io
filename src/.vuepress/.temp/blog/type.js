export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-2128c12a","v-56452198","v-87e1320a","v-2429a5dc","v-37e8cd69","v-dcafa1d8","v-3945b48a","v-147825fb","v-6e19edb7","v-4e65ec78","v-c151bf32","v-438ffe52","v-1473bf53","v-11b603de","v-2a1f0993"]},"/en/":{"path":"/en/article/","keys":["v-0e4acecb","v-1a05925e","v-6899cd04","v-138c530f","v-7ba691f0","v-b849f706","v-04cb33b0","v-39540332","v-3ada11cf","v-70eda030","v-3777b6d3","v-4a2a37eb","v-395cd082","v-4ea1ea25","v-7b80c002"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-2128c12a","v-dcafa1d8","v-3945b48a","v-c151bf32"]},"/en/":{"path":"/en/encrypted/","keys":["v-1a05925e","v-04cb33b0","v-3ada11cf","v-3777b6d3"]}},"slide":{"/":{"path":"/slide/","keys":["v-2a1f0993"]},"/en/":{"path":"/en/slide/","keys":["v-7b80c002"]}},"star":{"/":{"path":"/star/","keys":[]},"/en/":{"path":"/en/star/","keys":["v-0e4acecb"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-2128c12a","v-56452198","v-87e1320a","v-2429a5dc","v-37e8cd69","v-dcafa1d8","v-3945b48a","v-147825fb","v-6e19edb7"]},"/en/":{"path":"/en/timeline/","keys":["v-1a05925e","v-6899cd04","v-138c530f","v-7ba691f0","v-b849f706","v-04cb33b0","v-39540332","v-3ada11cf","v-0e4acecb"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

