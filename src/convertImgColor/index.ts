export default function convertImgColor(
  src: string,
  {
    red,
    green,
    blue,
    alpha,
  }: { red?: number; green?: number; blue?: number; alpha?: number },
): Promise<string> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    // 创建一个Image对象并加载图片
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      if (ctx) {
        // 将图片绘制到canvas上
        ctx.drawImage(img, 0, 0);

        // 获取画布的像素数据
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // 遍历每个像素，将颜色改为红色
        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 3] > 0) {
            if (red !== undefined) {
              data[i] = red;
            }
            if (green !== undefined) {
              data[i + 1] = green;
            }
            if (blue !== undefined) {
              data[i + 2] = blue;
            }
            if (alpha !== undefined) {
              data[i + 3] = alpha;
            }
          }
        }

        // 将修改后的像素数据重新绘制到canvas上
        ctx.putImageData(imageData, 0, 0);

        // 将canvas转换为Base64格式的图片
        const base64 = canvas.toDataURL();

        resolve(base64);
      }
    };

    // 设置图片的src属性，加载图片
    img.src = src;
  });
}
