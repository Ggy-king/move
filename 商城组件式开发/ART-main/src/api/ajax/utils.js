// 工具函数
// 给 URL 添加参数
export const addURLData = (url, param) => {
  if (!param) return '';

  const mark = url.includes('?') ? '&' : '?';

  return `${mark}${param}`;
};

// 数据序列化成 urlencoded 格式的字符串
export const serialize = param => {
  const results = [];

  for (const [key, value] of Object.entries(param)) {
    results.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  }

  return results.join('&');
};

// 数据序列化成 JSON 格式的字符串
export const serializeJSON = param => {
  return JSON.stringify(param);
};
