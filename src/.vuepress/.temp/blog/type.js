export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-2225f56c","v-56452198","v-87e1320a","v-2429a5dc","v-37e8cd69","v-dcafa1d8","v-3945b48a","v-147825fb","v-6e19edb7","v-184f4da6","v-2e3eac9e","v-4e65ec78","v-c151bf32","v-438ffe52","v-1473bf53"]},"/en/":{"path":"/en/article/","keys":["v-0e4acecb","v-1a05925e","v-6899cd04","v-138c530f","v-7ba691f0","v-b849f706","v-04cb33b0","v-3ada11cf","v-39540332","v-5aa3d8ba","v-367b840a","v-70eda030","v-3777b6d3","v-4a2a37eb","v-395cd082"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-2225f56c","v-dcafa1d8","v-3945b48a","v-c151bf32"]},"/en/":{"path":"/en/encrypted/","keys":["v-1a05925e","v-04cb33b0","v-3ada11cf","v-3777b6d3"]}},"slide":{"/":{"path":"/slide/","keys":["v-2e3eac9e"]},"/en/":{"path":"/en/slide/","keys":["v-367b840a"]}},"star":{"/":{"path":"/star/","keys":[]},"/en/":{"path":"/en/star/","keys":["v-0e4acecb"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-2225f56c","v-56452198","v-87e1320a","v-2429a5dc","v-37e8cd69","v-dcafa1d8","v-3945b48a","v-147825fb","v-6e19edb7"]},"/en/":{"path":"/en/timeline/","keys":["v-1a05925e","v-6899cd04","v-138c530f","v-7ba691f0","v-b849f706","v-04cb33b0","v-3ada11cf","v-39540332","v-0e4acecb"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

