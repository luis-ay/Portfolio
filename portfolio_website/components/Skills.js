import React from 'react'
import {SiJavascript, SiPython, SiJava,SiMongodb} from "react-icons/si";
import { DiMysql } from "react-icons/di";



const Skills = () => {
  return (
    <div id="skills" className='text-white md:mx-28 scroll-mt-16 md:scroll-mt-32'>
      <div id='container' className='flex-col bg-[#2d2d2d] p-4 rounded-3xl m-4'>
        <h1 className='text-2xl mb-4 font-sfpro'>Tech</h1>
        <div className='font-sfprolight'>
          <div id='langs'>
            <h1 className='font-bold tracking-wide mb-2'>Languages:</h1>
            <div className='flex justify-evenly mb-2'>

              <div id='js' className='inline-flex bg-[#3d3d3d] rounded-xl p-2 mb-2'>
                <p className='pr-1'>Javascript</p>
                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <rect width="24" height="24" fill="#F1DC50"/>
                    <path stroke="#333" strokeWidth="2" d="M12,11 C12,15.749205 12,18.4158717 12,19 C12,19.8761925 11.4771235,21 10,21 C7.61461794,21 7.5,19 7.5,19 M20.7899648,13.51604 C20.1898831,12.5053467 19.3944074,12 18.4035378,12 C16.8563489,12 16,13 16,14 C16,15 16.5,16 18.5084196,16.5 C19.7864643,16.8181718 21,17.5 21,19 C21,20.5 19.6845401,21 18.5,21 C16.9861609,21 15.9861609,20.3333333 15.5,19"/>
                  </g>
                </svg>
              </div>

              <div id='python' className='inline-flex bg-[#3d3d3d] rounded-xl p-2 mb-2'>
                <p>Python</p>
                <svg
                  className='scale-150'
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="25"
                  fill="none"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="url(#a)"
                    d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 110 2.79 1.393 1.393 0 01-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
                  ></path>
                  <path
                    fill="url(#b)"
                    d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 01-1.395-1.395 1.394 1.394 0 111.395 1.395z"
                  ></path>
                  <defs>
                    <linearGradient
                      id="a"
                      x1="19.075"
                      x2="34.898"
                      y1="18.782"
                      y2="34.658"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#387EB8"></stop>
                      <stop offset="1" stopColor="#366994"></stop>
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1="28.809"
                      x2="45.803"
                      y1="28.882"
                      y2="45.163"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE052"></stop>
                      <stop offset="1" stopColor="#FFC331"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div id='java' className='inline-flex bg-[#3d3d3d] rounded-xl p-2 mb-2'>
                <p>Java</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="30"
                    viewBox="0 0 192.756 192.756"
                  >
                    <g fillRule="evenodd" clipRule="evenodd">
                      <path fill="#3d3d3d" d="M0 0h192.756v192.756H0V0z"></path>
                      <path
                        fill="#3174b9"
                        d="M80.372 101.729s-4.604 2.679 3.28 3.584c9.554 1.091 14.434.934 24.959-1.057 0 0 2.771 1.735 6.639 3.236-23.601 10.113-53.413-.585-34.878-5.763zm-2.885-13.197s-5.165 3.823 2.726 4.639c10.206 1.054 18.262 1.14 32.211-1.544 0 0 1.926 1.955 4.957 3.023-28.531 8.345-60.307.657-39.894-6.118z"
                      ></path>
                      <path
                        fill="#ca3132"
                        d="M101.797 66.143c5.818 6.697-1.525 12.72-1.525 12.72s14.766-7.621 7.984-17.168c-6.332-8.899-11.189-13.32 15.102-28.566-.001-.001-41.27 10.303-21.561 33.014z"
                      ></path>
                      <path
                        fill="#3174b9"
                        d="M133.01 111.491s3.408 2.81-3.754 4.983c-13.619 4.125-56.694 5.369-68.659.164-4.298-1.872 3.766-4.467 6.303-5.015 2.646-.572 4.156-.468 4.156-.468-4.783-3.368-30.916 6.615-13.272 9.479 48.112 7.801 87.704-3.512 75.226-9.143zM82.587 74.857s-21.908 5.205-7.757 7.097c5.977.799 17.883.615 28.982-.316 9.068-.761 18.17-2.389 18.17-2.389s-3.195 1.371-5.51 2.949c-22.251 5.853-65.229 3.127-52.855-2.856 10.462-5.061 18.97-4.485 18.97-4.485zm39.304 21.967c22.617-11.75 12.16-23.044 4.859-21.522-1.785.373-2.586.695-2.586.695s.666-1.042 1.932-1.49c14.441-5.075 25.545 14.972-4.656 22.911-.001 0 .347-.314.451-.594z"
                      ></path>
                      <path
                        fill="#ca3132"
                        d="M108.256 8.504s12.523 12.531-11.881 31.794c-19.571 15.458-4.462 24.269-.006 34.34-11.426-10.307-19.807-19.382-14.185-27.826 8.254-12.395 31.125-18.406 26.072-38.308z"
                      ></path>
                      <path
                        fill="#3174b9"
                        d="M84.812 128.674c21.706 1.388 55.045-.771 55.836-11.044 0 0-1.518 3.894-17.941 6.983-18.529 3.488-41.386 3.082-54.938.845 0 0 2.777 2.298 17.043 3.216z"
                      ></path>
                      <path
                        fill="#ca3132"
                        d="M139.645 147.096h-.66v-.37h1.781v.37h-.66v1.848h-.461v-1.848zm3.554.092h-.008l-.656 1.755h-.301l-.652-1.755h-.008v1.755h-.438v-2.218h.643l.604 1.569.604-1.569h.637v2.218h-.424v-1.755h-.001zm-61.944 20.733c-2.047 1.774-4.211 2.772-6.154 2.772-2.768 0-4.27-1.663-4.27-4.324 0-2.881 1.608-4.989 8.044-4.989h2.379v6.541h.001zm5.65 6.374v-19.732c0-5.043-2.876-8.371-9.809-8.371-4.045 0-7.591.999-10.474 2.272l.83 3.495c2.271-.834 5.207-1.607 8.089-1.607 3.994 0 5.713 1.607 5.713 4.934v2.495h-1.996c-9.702 0-14.08 3.764-14.08 9.423 0 4.876 2.885 7.648 8.316 7.648 3.491 0 6.099-1.441 8.534-3.55l.443 2.993h4.434zm18.857 0h-7.045l-8.483-27.601h6.154l5.265 16.961 1.172 5.096c2.656-7.371 4.541-14.854 5.484-22.057h5.984c-1.602 9.088-4.488 19.066-8.531 27.601zm27.037-6.374c-2.053 1.774-4.217 2.772-6.156 2.772-2.768 0-4.268-1.663-4.268-4.324 0-2.881 1.609-4.989 8.041-4.989h2.383v6.541zm5.652 6.374v-19.732c0-5.043-2.885-8.371-9.811-8.371-4.049 0-7.594.999-10.477 2.272l.83 3.495c2.271-.834 5.213-1.607 8.096-1.607 3.988 0 5.709 1.607 5.709 4.934v2.495h-1.996c-9.703 0-14.078 3.764-14.078 9.423 0 4.876 2.879 7.648 8.311 7.648 3.494 0 6.098-1.441 8.539-3.55l.445 2.993h4.432zm-79.468 4.69c-1.61 2.353-4.214 4.216-7.061 5.267l-2.79-3.286c2.169-1.113 4.027-2.91 4.892-4.582.745-1.49 1.056-3.406 1.056-7.992v-31.515h6.005v31.08c0 6.134-.49 8.613-2.102 11.028z"
                      ></path>
                    </g>
                  </svg>
              </div>
            </div>
          </div>
          <div id='DBs'>
            <h1 className='font-bold tracking-wide mb-2'>Databases:</h1>
            <div className='flex justify-evenly mb-2'>
              <div id='mysql'className='inline-flex bg-[#3d3d3d] rounded-xl p-2 mb-2'>
                <p className='pr-2'>MySQL</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 -2 256 256"
                >
                  <path
                    fill="#319fff"
                    d="M235.648 194.212c-13.918-.347-24.705 1.045-33.752 4.872-2.61 1.043-6.786 1.044-7.134 4.35 1.392 1.392 1.566 3.654 2.784 5.567 2.09 3.479 5.741 8.177 9.047 10.614 3.653 2.783 7.308 5.566 11.134 8.002 6.786 4.176 14.442 6.611 21.053 10.787 3.829 2.434 7.654 5.568 11.482 8.177 1.914 1.39 3.131 3.654 5.568 4.523v-.521c-1.219-1.567-1.567-3.828-2.784-5.568-1.738-1.74-3.48-3.306-5.22-5.046-5.045-6.784-11.308-12.7-18.093-17.571-5.567-3.828-17.747-9.047-20.008-15.485 0 0-.175-.173-.348-.347 3.827-.348 8.35-1.74 12.005-2.784 5.915-1.567 11.308-1.218 17.398-2.784 2.783-.696 5.567-1.566 8.35-2.436v-1.565c-3.13-3.132-5.392-7.307-8.698-10.265-8.873-7.657-18.617-15.137-28.707-21.4-5.394-3.48-12.354-5.742-18.095-8.699-2.086-1.045-5.567-1.566-6.784-3.306-3.133-3.827-4.873-8.872-7.134-13.396-5.044-9.57-9.917-20.182-14.267-30.272-3.13-6.786-5.044-13.572-8.872-19.834-17.92-29.577-37.406-47.497-67.33-65.07-6.438-3.653-14.093-5.219-22.27-7.132-4.348-.175-8.699-.522-13.048-.697-2.784-1.218-5.568-4.523-8.004-6.089C34.006 4.573 8.429-8.996 1.122 8.924c-4.698 11.308 6.96 22.442 10.96 28.185 2.96 4.001 6.786 8.524 8.874 13.048 1.218 2.956 1.565 6.09 2.783 9.221 2.785 7.653 5.393 16.18 9.048 23.314 1.914 3.653 4.001 7.48 6.437 10.786 1.392 1.913 3.827 2.784 4.35 5.915-2.435 3.48-2.61 8.7-4.003 13.049-6.263 19.66-3.826 44.017 5.046 58.457 2.783 4.348 9.395 13.92 18.268 10.265 7.83-3.131 6.09-13.048 8.35-21.747.524-2.09.176-3.48 1.219-4.872v.349c2.436 4.87 4.871 9.569 7.133 14.44 5.394 8.524 14.788 17.398 22.617 23.314 4.177 3.13 7.482 8.524 12.702 10.438v-.523h-.349c-1.044-1.566-2.61-2.261-4.001-3.48-3.131-3.13-6.612-6.958-9.047-10.438-7.306-9.744-13.745-20.53-19.486-31.665-2.783-5.392-5.22-11.308-7.481-16.701-1.045-2.09-1.045-5.22-2.784-6.263-2.61 3.827-6.437 7.133-8.351 11.83-3.304 7.481-3.653 16.702-4.871 26.27-.696.176-.349 0-.697.35-5.566-1.394-7.48-7.134-9.569-12.006-5.22-12.352-6.09-32.186-1.565-46.452 1.218-3.654 6.438-15.136 4.35-18.616-1.044-3.306-4.525-5.22-6.438-7.829-2.261-3.306-4.698-7.48-6.263-11.135-4.176-9.743-6.264-20.53-10.787-30.273-2.088-4.524-5.74-9.22-8.699-13.396-3.305-4.697-6.959-8.004-9.569-13.571-.869-1.913-2.088-5.045-.696-7.133.348-1.392 1.043-1.913 2.436-2.261 2.262-1.915 8.7.521 10.96 1.565 6.438 2.608 11.831 5.046 17.225 8.699 2.435 1.74 5.045 5.046 8.176 5.916h3.654c5.568 1.217 11.83.348 17.05 1.913 9.222 2.957 17.572 7.307 25.054 12.005 22.792 14.44 41.58 34.97 54.282 59.501 2.088 4 2.957 7.656 4.871 11.83 3.655 8.526 8.178 17.225 11.83 25.576 3.654 8.176 7.133 16.528 12.353 23.314 2.61 3.652 13.048 5.567 17.746 7.481 3.48 1.565 8.874 2.958 12.005 4.871 5.915 3.652 11.83 7.83 17.398 11.83 2.784 2.088 11.482 6.438 12.005 9.917z"
                  ></path>
                  <path
                    fill="#00546B"
                    d="M58.186 43.022c-2.957 0-5.044.35-7.132.871v.348h.348c1.393 2.784 3.827 4.698 5.566 7.133 1.393 2.783 2.61 5.568 4.003 8.352.173-.175.347-.348.347-.348 2.437-1.741 3.654-4.524 3.654-8.7-1.044-1.217-1.218-2.435-2.088-3.653-1.043-1.741-3.306-2.61-4.698-4.003z"
                  ></path>
                </svg>
              </div>

              <div id='Mongo'className='inline-flex bg-[#3d3d3d] rounded-xl p-2 mb-2'>
                <p className='pr-2'>MongoDB</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 1024 1024"
                >
                  <circle cx="512" cy="512" r="512" fill="#13aa52"></circle>
                  <path
                    fill="#fff"
                    d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0113-78.53l1-.65a204.48 204.48 0 0020.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 00-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z"
                  ></path>
                </svg>
              </div>

            </div>
          </div>
          <div id='WebDev'>
            <h1 className='font-bold tracking-wide mb-2'>Web Developement:</h1>
            <div className='flex justify-evenly mb-2 flex-wrap align-evenly'>

              <div id='react'className='inline-flex bg-[#3d3d3d] rounded-xl p-2 mb-2'>
                <p className='pr-2'>React</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    preserveAspectRatio="xMinYMin meet"
                    viewBox="0 -13 256 256"
                  >
                    <path
                      fill="#2d2d2d"
                      d="M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955 64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996 19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z"
                    ></path>
                    <path
                      fill="#53C1DE"
                      d="M201.025 79.674a151.364 151.364 0 00-7.274-2.292 137.5 137.5 0 001.124-4.961c5.506-26.728 1.906-48.26-10.388-55.348-11.787-6.798-31.065.29-50.535 17.233a151.136 151.136 0 00-5.626 5.163 137.573 137.573 0 00-3.744-3.458c-20.405-18.118-40.858-25.752-53.139-18.643-11.776 6.817-15.264 27.06-10.307 52.39a150.91 150.91 0 001.67 7.484 149.875 149.875 0 00-8.363 2.63c-23.922 8.34-39.2 21.412-39.2 34.97 0 14.004 16.4 28.05 41.318 36.566a128.44 128.44 0 006.11 1.91 147.813 147.813 0 00-1.775 8.067c-4.726 24.89-1.035 44.653 10.71 51.428 12.131 6.995 32.491-.195 52.317-17.525 1.567-1.37 3.14-2.823 4.715-4.346a148.34 148.34 0 006.108 5.573c19.204 16.525 38.17 23.198 49.905 16.405 12.12-7.016 16.058-28.247 10.944-54.078-.39-1.973-.845-3.988-1.355-6.04 1.43-.422 2.833-.858 4.202-1.312 25.904-8.582 42.757-22.457 42.757-36.648 0-13.607-15.77-26.767-40.174-35.168z"
                    ></path>
                    <path
                      fill="#2d2d2d"
                      d="M195.406 142.328c-1.235.409-2.503.804-3.795 1.187-2.86-9.053-6.72-18.68-11.442-28.625 4.507-9.71 8.217-19.213 10.997-28.208 2.311.67 4.555 1.375 6.717 2.12 20.91 7.197 33.664 17.84 33.664 26.04 0 8.735-13.775 20.075-36.14 27.486zm-9.28 18.389c2.261 11.422 2.584 21.749 1.086 29.822-1.346 7.254-4.052 12.09-7.398 14.027-7.121 4.122-22.35-1.236-38.772-15.368a138.39 138.39 0 01-5.682-5.18c6.367-6.964 12.73-15.06 18.94-24.05 10.924-.969 21.244-2.554 30.603-4.717.46 1.86.87 3.683 1.223 5.466zm-93.85 43.137c-6.957 2.457-12.498 2.527-15.847.596-7.128-4.11-10.09-19.98-6.049-41.265a138.507 138.507 0 011.65-7.502c9.255 2.047 19.5 3.52 30.45 4.408 6.251 8.797 12.798 16.883 19.396 23.964a118.863 118.863 0 01-4.305 3.964c-8.767 7.664-17.552 13.1-25.294 15.835zm-32.593-61.58c-11.018-3.766-20.117-8.66-26.354-14-5.604-4.8-8.434-9.565-8.434-13.432 0-8.227 12.267-18.722 32.726-25.855a139.276 139.276 0 017.777-2.447c2.828 9.197 6.537 18.813 11.013 28.537-4.534 9.869-8.296 19.638-11.15 28.943a118.908 118.908 0 01-5.578-1.746zm10.926-74.37c-4.247-21.703-1.427-38.074 5.67-42.182 7.56-4.376 24.275 1.864 41.893 17.507 1.126 1 2.257 2.047 3.39 3.13-6.564 7.049-13.051 15.074-19.248 23.82-10.627.985-20.8 2.567-30.152 4.686a141.525 141.525 0 01-1.553-6.962zm97.467 24.067a306.982 306.982 0 00-6.871-11.3c7.21.91 14.117 2.12 20.603 3.601-1.947 6.241-4.374 12.767-7.232 19.457a336.42 336.42 0 00-6.5-11.758zm-39.747-38.714c4.452 4.823 8.911 10.209 13.297 16.052a284.245 284.245 0 00-26.706-.006c4.39-5.789 8.887-11.167 13.409-16.046zm-40.002 38.78a285.24 285.24 0 00-6.378 11.685c-2.811-6.667-5.216-13.222-7.18-19.552 6.447-1.443 13.322-2.622 20.485-3.517a283.79 283.79 0 00-6.927 11.384zm7.133 57.683c-7.4-.826-14.379-1.945-20.824-3.348 1.995-6.442 4.453-13.138 7.324-19.948a283.494 283.494 0 006.406 11.692 285.27 285.27 0 007.094 11.604zm33.136 27.389c-4.575-4.937-9.138-10.397-13.595-16.27 4.326.17 8.737.256 13.22.256 4.606 0 9.159-.103 13.64-.303-4.4 5.98-8.843 11.448-13.265 16.317zm46.072-51.032c3.02 6.884 5.566 13.544 7.588 19.877-6.552 1.495-13.625 2.699-21.078 3.593a337.537 337.537 0 006.937-11.498 306.632 306.632 0 006.553-11.972zm-14.915 7.15a316.478 316.478 0 01-10.84 17.49c-6.704.479-13.632.726-20.692.726-7.031 0-13.871-.219-20.458-.646A273.798 273.798 0 0196.72 133.28a271.334 271.334 0 01-9.64-18.206 273.864 273.864 0 019.611-18.216v.002a271.252 271.252 0 0110.956-17.442 273.484 273.484 0 0141.188.006 290.704 290.704 0 0110.887 17.383 316.418 316.418 0 019.741 18.13 290.806 290.806 0 01-9.709 18.29zm19.913-107.792c7.566 4.364 10.509 21.961 5.755 45.038a127.525 127.525 0 01-1.016 4.492c-9.374-2.163-19.554-3.773-30.212-4.773-6.209-8.841-12.642-16.88-19.1-23.838a141.92 141.92 0 015.196-4.766c16.682-14.518 32.273-20.25 39.377-16.153z"
                    ></path>
                    <path
                      fill="#53C1DE"
                      d="M128.221 94.665c11.144 0 20.177 9.034 20.177 20.177 0 11.144-9.033 20.178-20.177 20.178-11.143 0-20.177-9.034-20.177-20.178 0-11.143 9.034-20.177 20.177-20.177"
                    ></path>
                  </svg>
              </div>
              
              <div id='nextjs'className='inline-flex bg-[#3d3d3d] rounded-xl p-2 mb-2'>
                <p className='pr-2'>NextJS</p>
                <svg
                  className='bg-white rounded-full'
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 32 32"
                >
                  <path d="M23.749 30.005c-.119.063-.109.083.005.025a.31.31 0 00.095-.061c0-.021 0-.021-.1.036zm.24-.13c-.057.047-.057.047.011.016a.249.249 0 00.068-.047c0-.027-.016-.021-.079.031zm.156-.094c-.057.047-.057.047.011.016a.246.246 0 00.068-.048c0-.025-.016-.02-.079.032zm.158-.093c-.057.047-.057.047.009.015.037-.02.068-.041.068-.047 0-.025-.016-.02-.077.032zm.213-.141c-.109.073-.147.12-.047.068.067-.041.181-.131.161-.131-.043.016-.079.043-.115.063zM14.953.011c-.073.005-.292.025-.484.041-4.548.412-8.803 2.86-11.5 6.631a15.828 15.828 0 00-2.824 6.989c-.129.88-.145 1.14-.145 2.333 0 1.192.016 1.448.145 2.328.871 6.011 5.147 11.057 10.943 12.927 1.043.333 2.136.563 3.381.704.484.052 2.577.052 3.061 0 2.152-.24 3.969-.771 5.767-1.688.276-.14.328-.177.291-.208a340.89 340.89 0 01-2.609-3.495l-2.557-3.453-3.203-4.745a416.396 416.396 0 00-3.229-4.744c-.011 0-.025 2.109-.031 4.681-.011 4.505-.011 4.688-.068 4.792a.572.572 0 01-.276.287c-.099.047-.188.057-.661.057h-.541l-.141-.088a.595.595 0 01-.208-.229l-.068-.141.005-6.271.011-6.271.099-.125a.753.753 0 01.229-.187c.131-.063.183-.073.724-.073.635 0 .74.025.907.208a602.855 602.855 0 013.859 5.812c2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839.125-.083a16.346 16.346 0 003.285-2.885 15.935 15.935 0 003.767-8.177c.129-.88.145-1.141.145-2.333 0-1.193-.016-1.448-.145-2.328C30.985 7.668 26.709 2.622 20.913.751a16.983 16.983 0 00-3.328-.697c-.303-.031-2.371-.068-2.631-.041zM21.5 9.688a.623.623 0 01.317.364c.027.084.032 1.823.027 5.74l-.011 5.624-.989-1.52-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204a.67.67 0 01.313-.395c.124-.063.172-.068.667-.068.463 0 .541.005.645.063z"></path>
                </svg>
              </div>

              <div id='redux'className='inline-flex bg-[#3d3d3d] rounded-xl p-2 mb-2'>
                <p className='pr-2'>Redux Toolkit</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 -6 256 256"
                >
                  <path
                    fill="#764ABC"
                    d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
                  ></path>
                </svg>
              </div>

              <div id='Node'className='inline-flex bg-[#3d3d3d] rounded-xl p-2 mb-2'>
                <p className='pr-2'>NodeJS</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  preserveAspectRatio="xMinYMin meet"
                  viewBox="-13 0 282 282"
                >
                  <g fill="#8CC84B">
                    <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 00-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 001.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z"></path>
                    <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z"></path>
                  </g>
                </svg>
              </div>
              
              <div id='html'className='inline-flex bg-[#3d3d3d] rounded-xl p-2 mb-2'>
                <p className='pr-2'>HTML</p>
                <svg
                  className='h-6 w-6'
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  enableBackground="new 0 0 512 512"
                  version="1.1"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <path
                    fill="#FB8028"
                    d="M46.917 10.199c-4.518 0-7.885 3.682-7.484 8.182l38.091 427.247c.401 4.5 4.29 9.171 8.646 10.381l161.636 44.879c4.354 1.21 11.478 1.21 15.833.003l162.127-44.953c4.354-1.208 8.248-5.879 8.649-10.377l38.153-427.179c.404-4.5-2.966-8.182-7.484-8.182l-418.167-.001zM183.083 292.6c4.518 0 8.542 3.682 8.946 8.182l2.413 27.042c.401 4.5 4.296 9.144 8.66 10.322l44.723 12.078c4.36 1.178 7.945 2.143 7.965 2.143.019 0 3.603-.966 7.965-2.144l44.803-12.107c4.36-1.178 8.259-5.825 8.663-10.322l4.858-54.178c.404-4.5-2.962-8.182-7.48-8.182H142.478c-4.518 0-8.542-3.684-8.943-8.182L120.23 108.188c-.357-4.013 3.046-7.298 7.565-7.298h256.091c4.516 0 7.921 3.284 7.563 7.299l-4.313 47.103h-199.89c-4.518 0-7.885 3.682-7.484 8.182l3.521 39.357c.401 4.499 4.427 8.182 8.946 8.182h182.716c4.024 0 7.02 3.284 6.656 7.298l-13.85 155.14c-.225 2.525-3.969 5.58-8.323 6.787l-95.51 26.483a2331.868 2331.868 0 01-8.039 2.219c-.067.015-3.684-.963-8.039-2.17l-95.612-26.531c-4.354-1.208-8.244-5.879-8.646-10.379l-6.154-69.078c-.401-4.5 2.969-8.182 7.487-8.182h38.168z"
                  ></path>
                  <g fill="#C63F00">
                    <path d="M255.727 512c-3.784 0-7.567-.428-10.65-1.285l-161.635-44.88c-8.393-2.331-15.304-10.629-16.076-19.305L29.274 19.286c-.444-4.991 1.209-9.936 4.533-13.57C37.131 2.084 41.909 0 46.917 0h418.166c5.011 0 9.793 2.086 13.117 5.723 3.324 3.636 4.973 8.583 4.525 13.572l-38.153 427.173c-.774 8.673-7.687 16.97-16.082 19.298l-162.127 44.953c-3.083.854-6.861 1.281-10.636 1.281zM49.852 20.398l37.831 424.324c.104.395.846 1.286 1.31 1.49l161.541 44.848c2.569.715 7.807.714 10.383.001l162.124-44.952c.36-.169 1.081-1.028 1.221-1.527l37.884-424.184H49.852zm206.179 398.8c-1.541 0-3.752-.614-10.918-2.602L149.5 390.065c-8.391-2.326-15.304-10.623-16.077-19.3l-6.155-69.078c-.445-4.988 1.208-9.933 4.531-13.568 3.325-3.634 8.104-5.719 13.114-5.719h38.168c9.835 0 18.226 7.674 19.103 17.471l2.408 26.972c.135.467.802 1.261 1.238 1.475l44.651 12.057c2.036.55 3.901 1.053 5.303 1.43 1.403-.377 3.27-.881 5.308-1.432l44.73-12.088c.439-.215 1.109-1.013 1.244-1.482l4.589-51.175H142.479c-9.838 0-18.228-7.676-19.102-17.475L110.072 109.09c-.415-4.675 1.109-9.162 4.29-12.641 3.351-3.662 8.248-5.762 13.433-5.762H383.89c5.181 0 10.075 2.101 13.426 5.762 3.183 3.478 4.707 7.968 4.292 12.64l-4.316 47.13a10.199 10.199 0 01-10.156 9.269H190.182l3.161 35.323h181.603c4.775 0 9.331 1.991 12.502 5.461 3.172 3.474 4.743 8.197 4.311 12.958l-13.851 155.126c-.715 8.029-8.427 13.675-15.754 15.708l-95.512 26.484c-8.159 2.26-8.246 2.278-8.566 2.351-.802.176-1.357.299-2.045.299zm-101.009-48.769l95.545 26.511a962.68 962.68 0 005.243 1.439c1.424-.393 3.321-.917 5.384-1.489l95.509-26.483a6.283 6.283 0 001.119-.432l13.28-148.765H192.229c-9.84 0-18.233-7.677-19.105-17.477l-3.52-39.353c-.446-4.992 1.207-9.937 4.53-13.572 3.324-3.634 8.102-5.718 13.111-5.718h190.582l3.115-34.005H130.73l12.865 144.145H314.6c5.01 0 9.79 2.086 13.113 5.721s4.973 8.583 4.525 13.573l-4.859 54.176c-.78 8.701-7.729 16.98-16.163 19.258l-44.801 12.106c-9.246 2.498-9.246 2.498-10.625 2.498-1.382 0-1.382 0-10.623-2.495l-44.723-12.077c-8.437-2.279-15.384-10.56-16.159-19.265l-2.315-25.929h-34.121l5.887 66.084c.135.491.831 1.327 1.286 1.549z"></path>
                    <path d="M190.727 55.077H77.517c-5.632 0-10.199-4.567-10.199-10.199s4.567-10.199 10.199-10.199h113.21c5.632 0 10.199 4.567 10.199 10.199s-4.566 10.199-10.199 10.199zM232.543 55.077h-4.08c-5.632 0-10.199-4.567-10.199-10.199s4.567-10.199 10.199-10.199h4.08c5.632 0 10.199 4.567 10.199 10.199s-4.566 10.199-10.199 10.199z"></path>
                  </g>
                </svg>
              </div>
              
              <div id='css'className='inline-flex bg-[#3d3d3d] rounded-xl p-2 mb-2'>
                <p className='pr-2'>CSS</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#1572b6"
                    d="M5.902 27.201L3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201z"
                  ></path>
                  <path
                    fill="#33a9dc"
                    d="M16 27.858L24.17 25.593 26.092 4.061 16 4.061 16 27.858z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M16 13.191L20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191z"
                  ></path>
                  <path
                    fill="#ebebeb"
                    d="M16.019 21.218L16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M19.827 16.151L19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151z"
                  ></path>
                  <path
                    fill="#ebebeb"
                    d="M16.011 6.935L16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935z"
                  ></path>
                  <path
                    fill="#ebebeb"
                    d="M16 13.191L16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191z"
                  ></path>
                </svg>
              </div>
              
              <div id='tailwind'className='inline-flex bg-[#3d3d3d] rounded-xl p-2 mb-2'>
                <p className='pr-2'>Tailwind</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#44a8b3"
                    d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1z"
                  ></path>
                </svg>
              </div>

            </div>
          </div>

          <div id='VC'>
            <h1 className='font-bold tracking-wide mb-2'>Version Control:</h1>
            <div className='flex justify-evenly mb-2 flex-wrap align-evenly'>
              <div id='git'className='inline-flex bg-[#3d3d3d] rounded-xl p-2 mb-2'>
                <p className='pr-2'>Git</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#dd4c35"
                    d="M29.472 14.753L17.247 2.528a1.8 1.8 0 00-2.55 0l-2.539 2.539 3.22 3.22a2.141 2.141 0 012.712 2.73l3.1 3.1a2.143 2.143 0 11-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 11-1.764-.062V12.3a2.146 2.146 0 01-1.165-2.814l-3.17-3.172L2.528 14.7a1.8 1.8 0 000 2.551l12.225 12.221a1.8 1.8 0 002.55 0L29.472 17.3a1.8 1.8 0 000-2.551"
                  ></path>
                  <path
                    fill="#fff"
                    d="M12.158 5.067l3.22 3.22a2.141 2.141 0 012.712 2.73l3.1 3.1a2.143 2.143 0 11-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 11-1.764-.062V12.3a2.146 2.146 0 01-1.165-2.814l-3.17-3.172"
                  ></path>
                </svg>
              </div>

              <div id='github'className='inline-flex bg-[#3d3d3d] rounded-xl p-2 mb-2'>
                <p className='pr-2'>Github</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="#3d3d3d" d="M0 0h24v24H0z"></path>
                  <path fill="#fff" d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 01-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 01.676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 01.63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0112 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 01.616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 01-.012 2.716 1 1 0 01-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 01-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 01-.833.135A9.626 9.626 0 0012 5.315c-.89 0-1.772.119-2.592.35a1 1 0 01-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 01-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 01-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"></path>
                </svg>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Skills