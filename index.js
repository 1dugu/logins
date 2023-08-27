/*刘梓玉*/
      const startByte = 0; // 起始字节位置
      const endByte = 17; // 结束字节位置

      fetch("database.txt")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob(); // 将响应转换为 Blob 对象
        })
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = function () {
            const contentSlice = reader.result.slice(startByte, endByte);
            const content = new TextDecoder().decode(contentSlice);
            window.lziyu = content;
            console.log(content); // 打印截取的文件内容
          };
          reader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
/*牛诗琪*/    
      const startByte1 = 19; // 起始字节位置
      const endByte1 = 36; // 结束字节位置

      fetch("database.txt")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob(); // 将响应转换为 Blob 对象
        })
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = function () {
            const contentSlice = reader.result.slice(startByte1, endByte1);
            const content = new TextDecoder().decode(contentSlice);
            window.nshiqi = content;
            console.log(content); // 打印截取的文件内容
          };
          reader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
/*康炳一*/    
      const startByte2 = 38; // 起始字节位置
      const endByte2 = 55; // 结束字节位置

      fetch("database.txt")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob(); // 将响应转换为 Blob 对象
        })
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = function () {
            const contentSlice = reader.result.slice(startByte2, endByte2);
            const content = new TextDecoder().decode(contentSlice);
            window.kbingyi = content;
            console.log(content); // 打印截取的文件内容
          };
          reader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
/*赵淇塬*/    
      const startByte3 = 57; // 起始字节位置
      const endByte3 = 74; // 结束字节位置

      fetch("database.txt")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob(); // 将响应转换为 Blob 对象
        })
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = function () {
            const contentSlice = reader.result.slice(startByte3, endByte3);
            const content = new TextDecoder().decode(contentSlice);
            window.zqiyuan = content;
            console.log(content); // 打印截取的文件内容
          };
          reader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
/*郝翼*/    
      const startByte4 = 76; // 起始字节位置
      const endByte4 = 93; // 结束字节位置

      fetch("database.txt")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob(); // 将响应转换为 Blob 对象
        })
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = function () {
            const contentSlice = reader.result.slice(startByte4, endByte4);
            const content = new TextDecoder().decode(contentSlice);
            window.hyi = content;
            console.log(content); // 打印截取的文件内容
          };
          reader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
/*赵语霏*/    
      const startByte5 = 95; // 起始字节位置
      const endByte5 = 112; // 结束字节位置

      fetch("database.txt")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob(); // 将响应转换为 Blob 对象
        })
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = function () {
            const contentSlice = reader.result.slice(startByte5, endByte5);
            const content = new TextDecoder().decode(contentSlice);
            window.zyufei = content;
            console.log(content); // 打印截取的文件内容
          };
          reader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
/*杜文博*/    
      const startByte6 = 114; // 起始字节位置
      const endByte6 = 131; // 结束字节位置

      fetch("database.txt")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob(); // 将响应转换为 Blob 对象
        })
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = function () {
            const contentSlice = reader.result.slice(startByte6, endByte6);
            const content = new TextDecoder().decode(contentSlice);
            window.dwenbo = content;
            console.log(content); // 打印截取的文件内容
          };
          reader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
/*张欣怡*/    
      const startByte7 = 137; // 起始字节位置
      const endByte7 = 154; // 结束字节位置

      fetch("database.txt")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob(); // 将响应转换为 Blob 对象
        })
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = function () {
            const contentSlice = reader.result.slice(startByte7, endByte7);
            const content = new TextDecoder().decode(contentSlice);
            window.zxinyi = content;
            console.log(content); // 打印截取的文件内容
          };
          reader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
/*赵海青*/    
      const startByte8 = 156; // 起始字节位置
      const endByte8 = 173; // 结束字节位置

      fetch("database.txt")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob(); // 将响应转换为 Blob 对象
        })
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = function () {
            const contentSlice = reader.result.slice(startByte8, endByte8);
            const content = new TextDecoder().decode(contentSlice);
            window.zhaiqing = content;
            console.log(content); // 打印截取的文件内容
          };
          reader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
/*张凯林*/    
      const startByte9 = 177; // 起始字节位置
      const endByte9 = 194; // 结束字节位置

      fetch("database.txt")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob(); // 将响应转换为 Blob 对象
        })
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = function () {
            const contentSlice = reader.result.slice(startByte9, endByte9);
            const content = new TextDecoder().decode(contentSlice);
            window.zkailin = content;
            console.log(content); // 打印截取的文件内容
          };
          reader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
/*付业清*/    
      const startByte10 = 198; // 起始字节位置
      const endByte10 = 215; // 结束字节位置

      fetch("database.txt")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob(); // 将响应转换为 Blob 对象
        })
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = function () {
            const contentSlice = reader.result.slice(startByte10, endByte10);
            const content = new TextDecoder().decode(contentSlice);
            window.fyeqing = content;
            console.log(content); // 打印截取的文件内容
          };
          reader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
/*赵锐龙*/    
      const startByte11 = 219; // 起始字节位置
      const endByte11 = 236; // 结束字节位置

      fetch("database.txt")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob(); // 将响应转换为 Blob 对象
        })
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = function () {
            const contentSlice = reader.result.slice(startByte11, endByte11);
            const content = new TextDecoder().decode(contentSlice);
            window.zruilong = content;
            console.log(content); // 打印截取的文件内容
          };
          reader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
/*赵瑛蕊*/    
      const startByte12 = 238; // 起始字节位置
      const endByte12 = 255; // 结束字节位置

      fetch("database.txt")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob(); // 将响应转换为 Blob 对象
        })
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = function () {
            const contentSlice = reader.result.slice(startByte12, endByte12);
            const content = new TextDecoder().decode(contentSlice);
            window.zyingrui = content;
            console.log(content); // 打印截取的文件内容
          };
          reader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
/*李旭尧*/    
      const startByte13 = 261; // 起始字节位置
      const endByte13 = 278; // 结束字节位置

      fetch("database.txt")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob(); // 将响应转换为 Blob 对象
        })
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = function () {
            const contentSlice = reader.result.slice(startByte13, endByte13);
            const content = new TextDecoder().decode(contentSlice);
            window.lxuyao = content;
            console.log(content); // 打印截取的文件内容
          };
          reader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
/**/    
      const startByte000 = 280; // 起始字节位置
      const endByte000 = 312; // 结束字节位置

      fetch("database.txt")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob(); // 将响应转换为 Blob 对象
        })
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = function () {
            const contentSlice = reader.result.slice(startByte000, endByte000);
            const content = new TextDecoder().decode(contentSlice);
            window.pwd = content;
            console.log(content)
          };
          reader.readAsArrayBuffer(blob);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    