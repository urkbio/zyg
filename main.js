let userName = prompt('请输入用户名: ')
let passwd = prompt('请输入密码: ')
if (passwd == 1021) {
  document.write(`
  \n你好 <span>${userName}</span> 大佬，你的密码输入正确，欢迎你！
  `)
} else {
  window.location.href = "https://zyg{$rthSuffix}/404.html";
}
