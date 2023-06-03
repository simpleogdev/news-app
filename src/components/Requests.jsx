import { useState } from "react";
import Axios from "axios";
var currentDate = new Date();

currentDate.setDate(currentDate.getDate() - 1);

var year = currentDate.getFullYear();
var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
var day = ("0" + currentDate.getDate()).slice(-2);

var formattedDate = year + "-" + month + "-" + day;

console.log(formattedDate);

const Requests = () => {
  const [input, setInput] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
  const [img6, setImg6] = useState("");
  const [img7, setImg7] = useState("");
  const [img8, setImg8] = useState("");
  const [img9, setImg9] = useState("");

  const [imgNew1, setImgNew1] = useState("");
  const [imgNew2, setImgNew2] = useState("");
  const [imgNew3, setImgNew3] = useState("");
  const [imgNew4, setImgNew4] = useState("");
  const [imgNew5, setImgNew5] = useState("");
  const [imgNew6, setImgNew6] = useState("");
  const [imgNew7, setImgNew7] = useState("");
  const [imgNew8, setImgNew8] = useState("");
  const [imgNew9, setImgNew9] = useState("");

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");
  const [text9, setText9] = useState("");

  const [newtext1, setnewText1] = useState("");
  const [newtext2, setnewText2] = useState("");
  const [newtext3, setnewText3] = useState("");
  const [newtext4, setnewText4] = useState("");
  const [newtext5, setnewText5] = useState("");
  const [newtext6, setnewText6] = useState("");
  const [newtext7, setnewText7] = useState("");
  const [newtext8, setnewText8] = useState("");
  const [newtext9, setnewText9] = useState("");

  const [des1, setDes1] = useState("");
  const [des2, setDes2] = useState("");
  const [des3, setDes3] = useState("");
  const [des4, setDes4] = useState("");
  const [des5, setDes5] = useState("");
  const [des6, setDes6] = useState("");
  const [des7, setDes7] = useState("");
  const [des8, setDes8] = useState("");
  const [des9, setDes9] = useState("");

  const [newdes1, setnewDes1] = useState("");
  const [newdes2, setnewDes2] = useState("");
  const [newdes3, setnewDes3] = useState("");
  const [newdes4, setnewDes4] = useState("");
  const [newdes5, setnewDes5] = useState("");
  const [newdes6, setnewDes6] = useState("");
  const [newdes7, setnewDes7] = useState("");
  const [newdes8, setnewDes8] = useState("");
  const [newdes9, setnewDes9] = useState("");

  const [src, setSrc] = useState("");
  const [src1, setSrc1] = useState("");
  const [src2, setSrc2] = useState("");
  const [src3, setSrc3] = useState("");
  const [src4, setSrc4] = useState("");
  const [src5, setSrc5] = useState("");
  const [src6, setSrc6] = useState("");
  const [src7, setSrc7] = useState("");
  const [src8, setSrc8] = useState("");

  const [newsrc1, setnewSrc1] = useState("");
  const [newsrc2, setnewSrc2] = useState("");
  const [newsrc3, setnewSrc3] = useState("");
  const [newsrc4, setnewSrc4] = useState("");
  const [newsrc5, setnewSrc5] = useState("");
  const [newsrc6, setnewSrc6] = useState("");
  const [newsrc7, setnewSrc7] = useState("");
  const [newsrc8, setnewSrc8] = useState("");
  const [newsrc9, setnewSrc9] = useState("");

  const [time, setTime] = useState("");
  const [time1, setTime1] = useState("");
  const [time2, setTime2] = useState("");
  const [time3, setTime3] = useState("");
  const [time4, setTime4] = useState("");
  const [time5, setTime5] = useState("");
  const [time6, setTime6] = useState("");
  const [time7, setTime7] = useState("");
  const [time8, setTime8] = useState("");

  const [newtime1, setnewTime1] = useState("");
  const [newtime2, setnewTime2] = useState("");
  const [newtime3, setnewTime3] = useState("");
  const [newtime4, setnewTime4] = useState("");
  const [newtime5, setnewTime5] = useState("");
  const [newtime6, setnewTime6] = useState("");
  const [newtime7, setnewTime7] = useState("");
  const [newtime8, setnewTime8] = useState("");
  const [newtime9, setnewTime9] = useState("");

  const [url, setUrl] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");
  const [url4, setUrl4] = useState("");
  const [url5, setUrl5] = useState("");
  const [url6, setUrl6] = useState("");
  const [url7, setUrl7] = useState("");
  const [url8, setUrl8] = useState("");

  const [newurl1, setnewUrl1] = useState("");
  const [newurl2, setnewUrl2] = useState("");
  const [newurl3, setnewUrl3] = useState("");
  const [newurl4, setnewUrl4] = useState("");
  const [newurl5, setnewUrl5] = useState("");
  const [newurl6, setnewUrl6] = useState("");
  const [newurl7, setnewUrl7] = useState("");
  const [newurl8, setnewUrl8] = useState("");

  const fetchData = () => {
    Axios.get(
      `https://newsapi.org/v2/everything?q=${input}&from=${formattedDate}&sortBy=popularity&apiKey=${API_KEY}`
    ).then((res) => {
      setImg1(res.data.articles[0].urlToImage);
      setImg2(res.data.articles[1].urlToImage);
      setImg3(res.data.articles[2].urlToImage);
      setImg4(res.data.articles[3].urlToImage);
      setImg5(res.data.articles[4].urlToImage);
      setImg6(res.data.articles[5].urlToImage);
      setImg7(res.data.articles[6].urlToImage);
      setImg8(res.data.articles[7].urlToImage);
      setImg9(res.data.articles[8].urlToImage);

      setImgNew1(res.data.articles[9].urlToImage);
      setImgNew2(res.data.articles[10].urlToImage);
      setImgNew3(res.data.articles[11].urlToImage);
      setImgNew4(res.data.articles[12].urlToImage);
      setImgNew5(res.data.articles[13].urlToImage);
      setImgNew6(res.data.articles[14].urlToImage);
      setImgNew7(res.data.articles[15].urlToImage);
      setImgNew8(res.data.articles[16].urlToImage);
      setImgNew9(res.data.articles[17].urlToImage);

      setText1(res.data.articles[0].title);
      setText2(res.data.articles[1].title);
      setText3(res.data.articles[2].title);
      setText4(res.data.articles[3].title);
      setText5(res.data.articles[4].title);
      setText6(res.data.articles[5].title);
      setText7(res.data.articles[6].title);
      setText8(res.data.articles[7].title);
      setText9(res.data.articles[8].title);

      setnewText1(res.data.articles[9].title);
      setnewText2(res.data.articles[10].title);
      setnewText3(res.data.articles[11].title);
      setnewText4(res.data.articles[12].title);
      setnewText5(res.data.articles[13].title);
      setnewText6(res.data.articles[14].title);
      setnewText7(res.data.articles[15].title);
      setnewText8(res.data.articles[16].title);
      setnewText9(res.data.articles[17].title);

      setDes1(res.data.articles[0].description);
      setDes2(res.data.articles[1].description);
      setDes3(res.data.articles[2].description);
      setDes4(res.data.articles[3].description);
      setDes5(res.data.articles[4].description);
      setDes6(res.data.articles[5].description);
      setDes7(res.data.articles[6].description);
      setDes8(res.data.articles[7].description);
      setDes9(res.data.articles[8].description);

      setnewDes1(res.data.articles[9].description);
      setnewDes2(res.data.articles[10].description);
      setnewDes3(res.data.articles[11].description);
      setnewDes4(res.data.articles[12].description);
      setnewDes5(res.data.articles[13].description);
      setnewDes6(res.data.articles[14].description);
      setnewDes7(res.data.articles[15].description);
      setnewDes8(res.data.articles[16].description);
      setnewDes9(res.data.articles[17].description);
      console.log(res.data.articles[0].description);

      setSrc(res.data.articles[0].source.name);
      setSrc1(res.data.articles[1].source.name);
      setSrc2(res.data.articles[2].source.name);
      setSrc3(res.data.articles[3].source.name);
      setSrc4(res.data.articles[4].source.name);
      setSrc5(res.data.articles[5].source.name);
      setSrc6(res.data.articles[6].source.name);
      setSrc7(res.data.articles[7].source.name);
      setSrc8(res.data.articles[8].source.name);

      setnewSrc1(res.data.articles[9].source.name);
      setnewSrc2(res.data.articles[10].source.name);
      setnewSrc3(res.data.articles[11].source.name);
      setnewSrc4(res.data.articles[12].source.name);
      setnewSrc5(res.data.articles[13].source.name);
      setnewSrc6(res.data.articles[14].source.name);
      setnewSrc7(res.data.articles[15].source.name);
      setnewSrc8(res.data.articles[16].source.name);
      setnewSrc9(res.data.articles[17].source.name);

      setTime(res.data.articles[0].publishedAt);
      setTime1(res.data.articles[1].publishedAt);
      setTime2(res.data.articles[2].publishedAt);
      setTime3(res.data.articles[3].publishedAt);
      setTime4(res.data.articles[4].publishedAt);
      setTime5(res.data.articles[5].publishedAt);
      setTime6(res.data.articles[6].publishedAt);
      setTime7(res.data.articles[7].publishedAt);
      setTime8(res.data.articles[8].publishedAt);

      setnewTime1(res.data.articles[9].publishedAt);
      setnewTime2(res.data.articles[10].publishedAt);
      setnewTime3(res.data.articles[11].publishedAt);
      setnewTime4(res.data.articles[12].publishedAt);
      setnewTime5(res.data.articles[13].publishedAt);
      setnewTime6(res.data.articles[14].publishedAt);
      setnewTime7(res.data.articles[15].publishedAt);
      setnewTime8(res.data.articles[16].publishedAt);
      setnewTime9(res.data.articles[17].publishedAt);

      setUrl(res.data.articles[0].url);
      setUrl1(res.data.articles[1].url);
      setUrl2(res.data.articles[2].url);
      setUrl3(res.data.articles[3].url);
      setUrl4(res.data.articles[4].url);
      setUrl5(res.data.articles[5].url);
      setUrl6(res.data.articles[6].url);
      setUrl7(res.data.articles[7].url);
      setUrl8(res.data.articles[8].url);

      setnewUrl1(res.data.articles[9].url);
      setnewUrl2(res.data.articles[10].url);
      setnewUrl3(res.data.articles[11].url);
      setnewUrl4(res.data.articles[12].url);
      setnewUrl5(res.data.articles[12].url);
      setnewUrl6(res.data.articles[13].url);
      setnewUrl7(res.data.articles[15].url);
      setnewUrl8(res.data.articles[16].url);
      console.log(res.data.articles[0]);
    });
  };
  const userInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-center md:mb-0 mb-6">
        <input
          onChange={userInput}
          type="text"
          placeholder="search"
          className="md:px-10 px-2 py-2 outline-none border-gray-200 border-2"
        />
        <button
          onClick={fetchData}
          className="py-2 md:px-6 px-4 bg-black text-white rounded-md"
        >
          Search
        </button>
      </div>
      {/* */}
      <div className="md:grid md:grid-cols-3  overflow-x-hidden flex flex-col justify-center items-center md:mt-16 md:gap-y-14 md:max-w-[1600px] mx-auto">
        <div className="w-[300px] md:w-[500px] text-left md:mb-0 flex flex-col mb-8 justify-center items-center pb-6 md:h-[566px] bg-gray-100">
          <img className="w-full md:-mt-6 h-[60%] indent-[100vw]" src={img1} alt="" />
          <h1 className="text-lg  font-bold mt-5 mx-6">{text1}</h1>
          <p className="text-gray-600 mt-3   mx-5">{des1}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{src}</p>
            <p className="text-gray-500 mt-3  mr-7">{time}</p>
          </div>
          {src ? (
            <a
              href={url}
              className="w-full text-center bg-orange-500 py-2 -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="w-[300px] md:w-[500px] overflow-hidden md:mb-0 text-left flex md:ml-4 md:h-[566px] flex-col mb-8 justify-center items-center pb-6 bg-gray-100">
          <img className="w-full -mt-6 h-[60%] indent-[100vw]" src={img2} alt="" />
          <h1 className="text-lg font-bold mt-5 mx-6">{text2}</h1>
          <p className="text-gray-600 mt-3   mx-5">{des2}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{src1}</p>
            <p className="text-gray-500 mt-3 mr-7">{time1}</p>
          </div>
          {src ? (
            <a
              href={url1}
              className="w-full text-center bg-orange-500  py-2 -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="w-[300px] md:w-[500px]  md:mb-0 text-left md:ml-10 flex mb-8 flex-col md:h-[566px]  justify-center items-center pb-6 bg-gray-100">
          <img
            className="w-full h-[60%] md:-mt-6 -mt-6 indent-[100vw]"
            src={img3}
            alt=""
          />
          <h1 className="text-lg  font-bold mt-5 mx-6">{text3}</h1>
          <p className="text-gray-600 mt-3 mx-6">{des3}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{src2}</p>
            <p className="text-gray-500 mt-3 mr-7">{time2}</p>
          </div>
          {src ? (
            <a
              href={url2}
              className="w-full text-center  bg-orange-500 py-2 -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="w-[300px] md:w-[500px] md:mb-0 text-left flex flex-col mb-8 justify-center md:h-[566px]  items-center pb-6 bg-gray-100">
          <img className="w-full -mt-3 h-[60%] indent-[100vw]" src={img4} alt="" />
          <h1 className="text-lg  font-bold pt-5 mx-6">{text4}</h1>
          <p className="text-gray-600 pt-3  mx-5">{des4}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{src3}</p>
            <p className="text-gray-500 mt-3 mr-7">{time3}</p>
          </div>
          {src ? (
            <a
              href={url3}
              className="w-full text-center bg-orange-500 py-2  -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="w-[300px] md:w-[500px] md:mb-0 text-left  md:ml-7 flex mb-8 flex-col md:h-[566px] justify-center items-center pb-6 bg-gray-100">
          <img
            className="w-full -mt-3 md:-mt-6 h-[60%] indent-[100vw]"
            src={img5}
            alt=""
          />
          <h1 className="text-lg  font-bold mt-5 mx-6">{text5}</h1>
          <p className="text-gray-600 mt-3  mx-5">{des5}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{src4}</p>
            <p className="text-gray-500 mt-3 mr-14">{time4}</p>
          </div>
          {src ? (
            <a
              href={url4}
              className="w-full text-center bg-orange-500 py-2  -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="w-[300px] md:w-[500px] md:mb-0 text-left md:ml-14 flex mb-8 flex-col md:h-[566px] justify-center items-center pb-6 bg-gray-100">
          <img className="w-full -mt-6 h-[60%] indent-[100vw]" src={img6} alt="" />
          <h1 className="text-lg  font-bold mt-5 mx-8">{text6}</h1>
          <p className="text-gray-600 mt-3 mx-8 ">{des6}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{src5}</p>
            <p className="text-gray-500 mt-3 mr-14">{time5}</p>
          </div>
          {src ? (
            <a
              href={url5}
              className="w-full text-center bg-orange-500 py-2 -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="w-[300px] md:w-[500px] md:mb-0 text-left flex pd:ml-7 mb-8 flex-col md:h-[566px] justify-center items-center pb-6  bg-gray-100">
          <img className="w-full -mt-6 h-[60%] indent-[100vw]" src={img7} alt="" />
          <h1 className="text-lg  font-bold mt-5 mx-6">{text7}</h1>
          <p className="text-gray-600 mt-3 mx-5  ">{des7}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{src6}</p>
            <p className="text-gray-500 mt-3 mr-16">{time6}</p>
          </div>
          {src ? (
            <a
              href={url6}
              className="w-full text-center bg-orange-500 py-2  -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="w-[300px] md:w-[500px] md:mb-0 md:ml-7 text-left mb-8 flex flex-col md:h-[566px] justify-center items-center pb-6 bg-gray-100">
          <img className="w-full -mt-6 h-[60%] indent-[100vw]" src={img8} alt="" />
          <h1 className="text-lg  font-bold mt-5 mx-6">{text8}</h1>
          <p className="text-gray-600 mt-3  mx-5 ">{des8}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{src7}</p>
            <p className="text-gray-500 mt-3 mr-20">{time7}</p>
          </div>
          {src ? (
            <a
              href={url7}
              className="w-full text-center bg-orange-500 py-2  -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="w-[300px] md:w-[500px] md:ml-14 text-left md:mb-0 flex flex-col mb-8 md:h-[566px] justify-center items-center pb-6 bg-gray-100">
          <img className="w-full -mt-6 h-[60%] indent-[100vw]" src={img9} alt="" />
          <h1 className="text-lg  font-bold mt-5 mx-8">{text9}</h1>
          <p className="text-gray-600 mt-3 mx-8 ">{des9}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{src8}</p>
            <p className="text-gray-500 mt-3 mr-16">{time8}</p>
          </div>
          {src ? (
            <a
              href={url8}
              className="w-full text-center bg-orange-500 py-2  -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>

        {/* testing................................................. */}
        <div className="w-[300px] md:w-[500px] text-left md:mb-0 flex flex-col mb-8 justify-center items-center pb-6 md:h-[566px] bg-gray-100">
          <img className="w-full md:-mt-6 h-[60%] indent-[100vw]" src={imgNew1} alt="" />
          <h1 className="text-lg  font-bold mt-5 mx-6">{newtext1}</h1>
          <p className="text-gray-600 mt-3   mx-5">{newdes1}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{newsrc1}</p>
            <p className="text-gray-500 mt-3  mr-7">{newtime1}</p>
          </div>
          {src ? (
            <a
              href={url}
              className="w-full text-center bg-orange-500 py-2 -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="w-[300px] md:w-[500px] overflow-hidden md:mb-0 text-left flex md:ml-4 md:h-[566px] flex-col mb-8 justify-center items-center pb-6 bg-gray-100">
          <img className="w-full -mt-6 h-[60%] indent-[100vw]" src={imgNew2} alt="" />
          <h1 className="text-lg font-bold mt-5 mx-6">{newtext2}</h1>
          <p className="text-gray-600 mt-3   mx-5">{newdes2}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{newsrc2}</p>
            <p className="text-gray-500 mt-3 mr-7">{newtime2}</p>
          </div>
          {src ? (
            <a
              href={newurl1}
              className="w-full text-center bg-orange-500  py-2 -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="w-[300px] md:w-[500px]  md:mb-0 text-left md:ml-10 flex mb-8 flex-col md:h-[566px]  justify-center items-center pb-6 bg-gray-100">
          <img
            className="w-full h-[60%] md:-mt-6 -mt-16 indent-[100vw]"
            src={imgNew3}
            alt=""
          />
          <h1 className="text-lg  font-bold mt-5 mx-6">{newtext3}</h1>
          <p className="text-gray-600 mt-3 mx-6">{newdes3}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{newsrc3}</p>
            <p className="text-gray-500 mt-3 mr-7">{newtime3}</p>
          </div>
          {src ? (
            <a
              href={newurl2}
              className="w-full text-center  bg-orange-500 py-2 -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="w-[300px] md:w-[500px] md:mb-0 text-left flex flex-col mb-8 justify-center md:h-[566px]  items-center pb-6 bg-gray-100">
          <img className="w-full -mt-6 h-[60%] indent-[100vw]" src={imgNew4} alt="" />
          <h1 className="text-lg  font-bold pt-5 mx-6">{newtext4}</h1>
          <p className="text-gray-600 pt-3  mx-5">{newdes4}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{newsrc4}</p>
            <p className="text-gray-500 mt-3 mr-7">{newtime4}</p>
          </div>
          {src ? (
            <a
              href={newurl3}
              className="w-full text-center bg-orange-500 py-2  -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="w-[300px] md:w-[500px] md:mb-0 text-left  md:ml-7 flex mb-8 flex-col md:h-[566px] justify-center items-center pb-6 bg-gray-100">
          <img
            className="w-full -mt-14 md:-mt-6 h-[60%] indent-[100vw]"
            src={imgNew5}
            alt=""
          />
          <h1 className="text-lg  font-bold mt-5 mx-6">{newtext5}</h1>
          <p className="text-gray-600 mt-3  mx-5">{newdes5}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{newsrc5}</p>
            <p className="text-gray-500 mt-3 mr-14">{newtime5}</p>
          </div>
          {src ? (
            <a
              href={newurl4}
              className="w-full text-center bg-orange-500 py-2  -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="w-[300px] md:w-[500px] md:mb-0 text-left md:ml-14 flex mb-8 flex-col md:h-[566px] justify-center items-center pb-6 bg-gray-100">
          <img className="w-full -mt-6 h-[60%] indent-[100vw]" src={imgNew6} alt="" />
          <h1 className="text-lg  font-bold mt-5 mx-8">{newtext6}</h1>
          <p className="text-gray-600 mt-3 mx-8 ">{newdes6}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{newsrc6}</p>
            <p className="text-gray-500 mt-3 mr-14">{newtime6}</p>
          </div>
          {src ? (
            <a
              href={newurl5}
              className="w-full text-center bg-orange-500 py-2 -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="w-[300px] md:w-[500px] md:mb-0 text-left flex pd:ml-7 mb-8 flex-col md:h-[566px] justify-center items-center pb-6  bg-gray-100">
          <img className="w-full -mt-6 h-[60%] indent-[100vw]" src={imgNew7} alt="" />
          <h1 className="text-lg  font-bold mt-5 mx-6">{newtext7}</h1>
          <p className="text-gray-600 mt-3 mx-5  ">{newdes7}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{newsrc7}</p>
            <p className="text-gray-500 mt-3 mr-16">{newtime7}</p>
          </div>
          {src ? (
            <a
              href={newurl6}
              className="w-full text-center bg-orange-500 py-2  -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="w-[300px] md:w-[500px] md:mb-0 md:ml-7 text-left mb-8 flex flex-col md:h-[566px] justify-center items-center pb-6 bg-gray-100">
          <img className="w-full -mt-6 h-[60%] indent-[100vw]" src={imgNew8} alt="" />
          <h1 className="text-lg  font-bold mt-5 mx-6">{newtext8}</h1>
          <p className="text-gray-600 mt-3  mx-5 ">{newdes8}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{newsrc8}</p>
            <p className="text-gray-500 mt-3 mr-20">{newtime8}</p>
          </div>
          {src ? (
            <a
              href={newurl7}
              className="w-full text-center bg-orange-500 py-2  -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="w-[300px] md:w-[500px] md:ml-14 text-left md:mb-0 flex flex-col mb-8 md:h-[566px] justify-center items-center pb-6 bg-gray-100">
          <img className="w-full -mt-6 h-[60%] indent-[100vw]" src={imgNew9} alt="" />
          <h1 className="text-lg  font-bold mt-5 mx-8">{newtext9}</h1>
          <p className="text-gray-600 mt-3 mx-8 ">{newdes9}</p>
          <div className="flex justify-end md:ml-56 whitespace-nowrap ml-20 mb-3">
            <p className="text-gray-500 mt-3 mr-4">{newsrc9}</p>
            <p className="text-gray-500 mt-3 mr-16">{newtime9}</p>
          </div>
          {src ? (
            <a
              href={newurl8}
              className="w-full text-center bg-orange-500 py-2  -mb-6 text-white"
            >
              Read More.
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Requests;
