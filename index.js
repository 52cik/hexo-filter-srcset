hexo.extend.filter.register('after_post_render', function(data) {
  data.content = data.content.replace(/<img src="([^"]+@(\dx)[^"]*)"/g, '$& srcset="$1 $2"');

  return data;
});
