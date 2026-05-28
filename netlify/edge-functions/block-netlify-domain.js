export default async (request, context) => {
  // 获取请求的 Host 头信息，例如 'your-site.netlify.app' 或 'www.yourdomain.com'
  const url = new URL(request.url);
  const hostname = url.hostname;

  // 需要阻止的 Netlify 默认域名后缀，可以根据需要修改
  const blockedSuffixes = ['twilight-blog.netlify.app'];
  const isBlocked = blockedSuffixes.some(suffix => hostname.endsWith(suffix));

  // 如果匹配到，则返回 404 页面
  if (isBlocked) {
    // 可选：记录被阻止的请求
    console.log(`Blocked request to Netlify default domain: ${hostname}${url.pathname}`);
    // 返回 404 状态码，并提供一个简单的错误页面
    return new Response('Not Found', { status: 404 });
  }

  // 允许其他所有请求（如你的自定义域名）
  return;
};