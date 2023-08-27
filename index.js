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
      const startByte1 = 18; // 起始字节位置
      const endByte1 = 35; // 结束字节位置

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
      const startByte2 = 36; // 起始字节位置
      const endByte2 = 53; // 结束字节位置

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
      const startByte3 = 54; // 起始字节位置
      const endByte3 = 71; // 结束字节位置

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
      const startByte4 = 72; // 起始字节位置
      const endByte4 = 89; // 结束字节位置

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
      const startByte5 = 90; // 起始字节位置
      const endByte5 = 107; // 结束字节位置

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
      const startByte6 = 108; // 起始字节位置
      const endByte6 = 125; // 结束字节位置

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
      const startByte7 = 126; // 起始字节位置
      const endByte7 = 143; // 结束字节位置

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
      const startByte8 = 144; // 起始字节位置
      const endByte8 = 161; // 结束字节位置

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
      const startByte9 = 162; // 起始字节位置
      const endByte9 = 179; // 结束字节位置

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
      const startByte10 = 180; // 起始字节位置
      const endByte10 = 197; // 结束字节位置

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
      const startByte11 = 198; // 起始字节位置
      const endByte11 = 215; // 结束字节位置

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
      const startByte12 = 216; // 起始字节位置
      const endByte12 = 233; // 结束字节位置

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
      const startByte13 = 234; // 起始字节位置
      const endByte13 = 251; // 结束字节位置

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
      const startByte000 = 252; // 起始字节位置
      const endByte000 = 264; // 结束字节位置

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
    
