"use client"
import React, { useState } from "react";

const page = () => {
    const [maintenanceText, setMaintenanceText] = useState('Site is under maintenance mode');
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>('');
  
    
  
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]; // Use optional chaining in case files is null
      if (file) {
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
      }
    };
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMaintenanceText(e.target.value);
      };
  return (
    <div className=" w-full  pb-8">
 
        
    <div className="flex items-center space-x-4 py-5 lg:py-6">
    <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
    Site Info
    </h2>
    <div className="hidden h-full py-1 sm:flex">
      <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
    </div>
    <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
      <li className="flex items-center space-x-2">
        <a className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent" href="#">Home
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </li>
    
      <li>Site Information</li>
    </ul>
  </div>


 
        
        <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
          <div className="col-span-12 lg:col-span-8">
            <div className="card">
           
             <div className="tabs flex flex-col">
              <div className="p-4">
              <h2 className=" font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">
              Site Info</h2>
                <div className="space-y-5 mt-4">
                <div className="flex space-x-4">
                  <label className="block flex-1">
                  Name
                    <input
                      className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Service Name"
                      type="text"
                    />
                  </label>
                  <label className="block flex-1">
                  Email
                    <input
                      className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Amount"
                      type="email"
                    />
                  </label>
                  </div>
                
                  
                    <div className="mt-1.5 w-full">
                        Address
                      <div role="toolbar" className="ql-toolbar ql-snow mt-2">
                        <span className="ql-formats">
                          <button
                            type="button"
                            className="ql-bold"
                            aria-pressed="false"
                            aria-label="bold"
                          >
                            <svg viewBox="0 0 18 18">
                              <path
                                className="ql-stroke"
                                d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                              />
                              <path
                                className="ql-stroke"
                                d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                              />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="ql-italic"
                            aria-pressed="false"
                            aria-label="italic"
                          >
                            <svg viewBox="0 0 18 18">
                              <line
                                className="ql-stroke"
                                x1={7}
                                x2={13}
                                y1={4}
                                y2={4}
                              />
                              <line
                                className="ql-stroke"
                                x1={5}
                                x2={11}
                                y1={14}
                                y2={14}
                              />
                              <line
                                className="ql-stroke"
                                x1={8}
                                x2={10}
                                y1={14}
                                y2={4}
                              />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="ql-underline"
                            aria-pressed="false"
                            aria-label="underline"
                          >
                            <svg viewBox="0 0 18 18">
                              <path
                                className="ql-stroke"
                                d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                              />
                              <rect
                                className="ql-fill"
                                height={1}
                                rx="0.5"
                                ry="0.5"
                                width={12}
                                x={3}
                                y={15}
                              />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="ql-strike"
                            aria-pressed="false"
                            aria-label="strike"
                          >
                            <svg viewBox="0 0 18 18">
                              <line
                                className="ql-stroke ql-thin"
                                x1="15.5"
                                x2="2.5"
                                y1="8.5"
                                y2="9.5"
                              />
                              <path
                                className="ql-fill"
                                d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"
                              />
                              <path
                                className="ql-fill"
                                d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"
                              />
                            </svg>
                          </button>
                        </span>
                        <span className="ql-formats">
                          <button
                            type="button"
                            className="ql-blockquote"
                            aria-pressed="false"
                            aria-label="blockquote"
                          >
                            <svg viewBox="0 0 18 18">
                              <rect
                                className="ql-fill ql-stroke"
                                height={3}
                                width={3}
                                x={4}
                                y={5}
                              />
                              <rect
                                className="ql-fill ql-stroke"
                                height={3}
                                width={3}
                                x={11}
                                y={5}
                              />
                              <path
                                className="ql-even ql-fill ql-stroke"
                                d="M7,8c0,4.031-3,5-3,5"
                              />
                              <path
                                className="ql-even ql-fill ql-stroke"
                                d="M14,8c0,4.031-3,5-3,5"
                              />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="ql-code-block"
                            aria-pressed="false"
                            aria-label="code-block"
                          >
                            <svg viewBox="0 0 18 18">
                              <polyline
                                className="ql-even ql-stroke"
                                points="5 7 3 9 5 11"
                              />
                              <polyline
                                className="ql-even ql-stroke"
                                points="13 7 15 9 13 11"
                              />
                              <line
                                className="ql-stroke"
                                x1={10}
                                x2={8}
                                y1={5}
                                y2={13}
                              />
                            </svg>
                          </button>
                        </span>
                        <span className="ql-formats">
                          <button
                            type="button"
                            className="ql-header"
                            aria-pressed="false"
                            value={1}
                            aria-label="header: 1"
                          >
                            <svg viewBox="0 0 18 18">
                              <path
                                className="ql-fill"
                                d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"
                              />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="ql-header"
                            aria-pressed="false"
                            value={2}
                            aria-label="header: 2"
                          >
                            <svg viewBox="0 0 18 18">
                              <path
                                className="ql-fill"
                                d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"
                              />
                            </svg>
                          </button>
                        </span>
                        <span className="ql-formats">
                          <button
                            type="button"
                            className="ql-list"
                            aria-pressed="false"
                            value="ordered"
                            aria-label="list: ordered"
                          >
                            <svg viewBox="0 0 18 18">
                              <line
                                className="ql-stroke"
                                x1={7}
                                x2={15}
                                y1={4}
                                y2={4}
                              />
                              <line
                                className="ql-stroke"
                                x1={7}
                                x2={15}
                                y1={9}
                                y2={9}
                              />
                              <line
                                className="ql-stroke"
                                x1={7}
                                x2={15}
                                y1={14}
                                y2={14}
                              />
                              <line
                                className="ql-stroke ql-thin"
                                x1="2.5"
                                x2="4.5"
                                y1="5.5"
                                y2="5.5"
                              />
                              <path
                                className="ql-fill"
                                d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
                              />
                              <path
                                className="ql-stroke ql-thin"
                                d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
                              />
                              <path
                                className="ql-stroke ql-thin"
                                d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
                              />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="ql-list"
                            aria-pressed="false"
                            value="bullet"
                            aria-label="list: bullet"
                          >
                            <svg viewBox="0 0 18 18">
                              <line
                                className="ql-stroke"
                                x1={6}
                                x2={15}
                                y1={4}
                                y2={4}
                              />
                              <line
                                className="ql-stroke"
                                x1={6}
                                x2={15}
                                y1={9}
                                y2={9}
                              />
                              <line
                                className="ql-stroke"
                                x1={6}
                                x2={15}
                                y1={14}
                                y2={14}
                              />
                              <line
                                className="ql-stroke"
                                x1={3}
                                x2={3}
                                y1={4}
                                y2={4}
                              />
                              <line
                                className="ql-stroke"
                                x1={3}
                                x2={3}
                                y1={9}
                                y2={9}
                              />
                              <line
                                className="ql-stroke"
                                x1={3}
                                x2={3}
                                y1={14}
                                y2={14}
                              />
                            </svg>
                          </button>
                        </span>
                        <span className="ql-formats">
                          <button
                            type="button"
                            className="ql-script"
                            aria-pressed="false"
                            value="sub"
                            aria-label="script: sub"
                          >
                            <svg viewBox="0 0 18 18">
                              <path
                                className="ql-fill"
                                d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"
                              />
                              <path
                                className="ql-fill"
                                d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"
                              />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="ql-script"
                            aria-pressed="false"
                            value="super"
                            aria-label="script: super"
                          >
                            <svg viewBox="0 0 18 18">
                              <path
                                className="ql-fill"
                                d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"
                              />
                              <path
                                className="ql-fill"
                                d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"
                              />
                            </svg>
                          </button>
                        </span>
                        <span className="ql-formats">
                          <button
                            type="button"
                            className="ql-indent"
                            aria-pressed="false"
                            value={-1}
                            aria-label="indent: -1"
                          >
                            <svg viewBox="0 0 18 18">
                              <line
                                className="ql-stroke"
                                x1={3}
                                x2={15}
                                y1={14}
                                y2={14}
                              />
                              <line
                                className="ql-stroke"
                                x1={3}
                                x2={15}
                                y1={4}
                                y2={4}
                              />
                              <line
                                className="ql-stroke"
                                x1={9}
                                x2={15}
                                y1={9}
                                y2={9}
                              />
                              <polyline
                                className="ql-stroke"
                                points="5 7 5 11 3 9 5 7"
                              />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="ql-indent"
                            aria-pressed="false"
                            value={+1}
                            aria-label="indent: +1"
                          >
                            <svg viewBox="0 0 18 18">
                              <line
                                className="ql-stroke"
                                x1={3}
                                x2={15}
                                y1={14}
                                y2={14}
                              />
                              <line
                                className="ql-stroke"
                                x1={3}
                                x2={15}
                                y1={4}
                                y2={4}
                              />
                              <line
                                className="ql-stroke"
                                x1={9}
                                x2={15}
                                y1={9}
                                y2={9}
                              />
                              <polyline
                                className="ql-fill ql-stroke"
                                points="3 7 3 11 5 9 3 7"
                              />
                            </svg>
                          </button>
                        </span>
                        <span className="ql-formats">
                          <button
                            type="button"
                            className="ql-direction"
                            aria-pressed="false"
                            value="rtl"
                            aria-label="direction: rtl"
                          >
                            <svg viewBox="0 0 18 18">
                              <polygon
                                className="ql-stroke ql-fill"
                                points="3 11 5 9 3 7 3 11"
                              />
                              <line
                                className="ql-stroke ql-fill"
                                x1={15}
                                x2={11}
                                y1={4}
                                y2={4}
                              />
                              <path
                                className="ql-fill"
                                d="M11,3a3,3,0,0,0,0,6h1V3H11Z"
                              />
                              <rect
                                className="ql-fill"
                                height={11}
                                width={1}
                                x={11}
                                y={4}
                              />
                              <rect
                                className="ql-fill"
                                height={11}
                                width={1}
                                x={13}
                                y={4}
                              />
                            </svg>
                            <svg viewBox="0 0 18 18">
                              <polygon
                                className="ql-stroke ql-fill"
                                points="15 12 13 10 15 8 15 12"
                              />
                              <line
                                className="ql-stroke ql-fill"
                                x1={9}
                                x2={5}
                                y1={4}
                                y2={4}
                              />
                              <path
                                className="ql-fill"
                                d="M5,3A3,3,0,0,0,5,9H6V3H5Z"
                              />
                              <rect
                                className="ql-fill"
                                height={11}
                                width={1}
                                x={5}
                                y={4}
                              />
                              <rect
                                className="ql-fill"
                                height={11}
                                width={1}
                                x={7}
                                y={4}
                              />
                            </svg>
                          </button>
                        </span>
                        <span className="ql-formats">
                          <span className="ql-size ql-picker">
                            <span
                              className="ql-picker-label"
                              tabIndex={0}
                              role="button"
                              aria-expanded="false"
                              aria-controls="ql-picker-options-0"
                            >
                              <svg viewBox="0 0 18 18">
                                <polygon
                                  className="ql-stroke"
                                  points="7 11 9 13 11 11 7 11"
                                />
                                <polygon
                                  className="ql-stroke"
                                  points="7 7 9 5 11 7 7 7"
                                />
                              </svg>
                            </span>
                            <span
                              className="ql-picker-options"
                              aria-hidden="true"
                              tabIndex={-1}
                              id="ql-picker-options-0"
                            >
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="small"
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-selected"
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="large"
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="huge"
                              />
                            </span>
                          </span>
                          <select
                            className="ql-size"
                            style={{ display: "none" }}
                          >
                            <option value="small" />
                            <option value="selected" />
                            <option value="large" />
                            <option value="huge" />
                          </select>
                        </span>
                        <span className="ql-formats">
                          <span className="ql-header ql-picker">
                            <span
                              className="ql-picker-label"
                              tabIndex={0}
                              role="button"
                              aria-expanded="false"
                              aria-controls="ql-picker-options-1"
                            >
                              <svg viewBox="0 0 18 18">
                                <polygon
                                  className="ql-stroke"
                                  points="7 11 9 13 11 11 7 11"
                                />
                                <polygon
                                  className="ql-stroke"
                                  points="7 7 9 5 11 7 7 7"
                                />
                              </svg>
                            </span>
                            <span
                              className="ql-picker-options"
                              aria-hidden="true"
                              tabIndex={-1}
                              id="ql-picker-options-1"
                            >
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value={1}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value={2}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value={3}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value={4}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value={5}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value={6}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-selected"
                              />
                            </span>
                          </span>
                          <select
                            className="ql-header"
                            style={{ display: "none" }}
                          >
                            <option value={1} />
                            <option value={2} />
                            <option value={3} />
                            <option value={4} />
                            <option value={5} />
                            <option value={6} />
                            <option value="selected" />
                          </select>
                        </span>
                        <span className="ql-formats">
                          <span className="ql-color ql-picker ql-color-picker">
                            <span
                              className="ql-picker-label"
                              tabIndex={0}
                              role="button"
                              aria-expanded="false"
                              aria-controls="ql-picker-options-2"
                            >
                              <svg viewBox="0 0 18 18">
                                <line
                                  className="ql-color-label ql-stroke ql-transparent"
                                  x1={3}
                                  x2={15}
                                  y1={15}
                                  y2={15}
                                />
                                <polyline
                                  className="ql-stroke"
                                  points="5.5 11 9 3 12.5 11"
                                />
                                <line
                                  className="ql-stroke"
                                  x1="11.63"
                                  x2="6.38"
                                  y1={9}
                                  y2={9}
                                />
                              </svg>
                            </span>
                            <span
                              className="ql-picker-options"
                              aria-hidden="true"
                              tabIndex={-1}
                              id="ql-picker-options-2"
                            >
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-selected ql-primary"
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-primary"
                                data-value="#e60000"
                                style={{ backgroundColor: "rgb(230, 0, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-primary"
                                data-value="#ff9900"
                                style={{ backgroundColor: "rgb(255, 153, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-primary"
                                data-value="#ffff00"
                                style={{ backgroundColor: "rgb(255, 255, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-primary"
                                data-value="#008a00"
                                style={{ backgroundColor: "rgb(0, 138, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-primary"
                                data-value="#0066cc"
                                style={{ backgroundColor: "rgb(0, 102, 204)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-primary"
                                data-value="#9933ff"
                                style={{ backgroundColor: "rgb(153, 51, 255)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#ffffff"
                                style={{
                                  backgroundColor: "rgb(255, 255, 255)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#facccc"
                                style={{
                                  backgroundColor: "rgb(250, 204, 204)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#ffebcc"
                                style={{
                                  backgroundColor: "rgb(255, 235, 204)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#ffffcc"
                                style={{
                                  backgroundColor: "rgb(255, 255, 204)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#cce8cc"
                                style={{
                                  backgroundColor: "rgb(204, 232, 204)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#cce0f5"
                                style={{
                                  backgroundColor: "rgb(204, 224, 245)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#ebd6ff"
                                style={{
                                  backgroundColor: "rgb(235, 214, 255)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#bbbbbb"
                                style={{
                                  backgroundColor: "rgb(187, 187, 187)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#f06666"
                                style={{
                                  backgroundColor: "rgb(240, 102, 102)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#ffc266"
                                style={{
                                  backgroundColor: "rgb(255, 194, 102)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#ffff66"
                                style={{
                                  backgroundColor: "rgb(255, 255, 102)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#66b966"
                                style={{
                                  backgroundColor: "rgb(102, 185, 102)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#66a3e0"
                                style={{
                                  backgroundColor: "rgb(102, 163, 224)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#c285ff"
                                style={{
                                  backgroundColor: "rgb(194, 133, 255)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#888888"
                                style={{
                                  backgroundColor: "rgb(136, 136, 136)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#a10000"
                                style={{ backgroundColor: "rgb(161, 0, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#b26b00"
                                style={{ backgroundColor: "rgb(178, 107, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#b2b200"
                                style={{ backgroundColor: "rgb(178, 178, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#006100"
                                style={{ backgroundColor: "rgb(0, 97, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#0047b2"
                                style={{ backgroundColor: "rgb(0, 71, 178)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#6b24b2"
                                style={{ backgroundColor: "rgb(107, 36, 178)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#444444"
                                style={{ backgroundColor: "rgb(68, 68, 68)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#5c0000"
                                style={{ backgroundColor: "rgb(92, 0, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#663d00"
                                style={{ backgroundColor: "rgb(102, 61, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#666600"
                                style={{ backgroundColor: "rgb(102, 102, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#003700"
                                style={{ backgroundColor: "rgb(0, 55, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#002966"
                                style={{ backgroundColor: "rgb(0, 41, 102)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#3d1466"
                                style={{ backgroundColor: "rgb(61, 20, 102)" }}
                              />
                            </span>
                          </span>
                          <select
                            className="ql-color"
                            style={{ display: "none" }}
                          >
                            <option value="selected" />
                            <option value="#e60000" />
                            <option value="#ff9900" />
                            <option value="#ffff00" />
                            <option value="#008a00" />
                            <option value="#0066cc" />
                            <option value="#9933ff" />
                            <option value="#ffffff" />
                            <option value="#facccc" />
                            <option value="#ffebcc" />
                            <option value="#ffffcc" />
                            <option value="#cce8cc" />
                            <option value="#cce0f5" />
                            <option value="#ebd6ff" />
                            <option value="#bbbbbb" />
                            <option value="#f06666" />
                            <option value="#ffc266" />
                            <option value="#ffff66" />
                            <option value="#66b966" />
                            <option value="#66a3e0" />
                            <option value="#c285ff" />
                            <option value="#888888" />
                            <option value="#a10000" />
                            <option value="#b26b00" />
                            <option value="#b2b200" />
                            <option value="#006100" />
                            <option value="#0047b2" />
                            <option value="#6b24b2" />
                            <option value="#444444" />
                            <option value="#5c0000" />
                            <option value="#663d00" />
                            <option value="#666600" />
                            <option value="#003700" />
                            <option value="#002966" />
                            <option value="#3d1466" />
                          </select>
                          <span className="ql-background ql-picker ql-color-picker">
                            <span
                              className="ql-picker-label"
                              tabIndex={0}
                              role="button"
                              aria-expanded="false"
                              aria-controls="ql-picker-options-3"
                            >
                              <svg viewBox="0 0 18 18">
                                <g className="ql-fill ql-color-label">
                                  <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868" />
                                  <rect height={1} width={1} x={4} y={4} />
                                  <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5" />
                                  <rect height={1} width={1} x={2} y={6} />
                                  <rect height={1} width={1} x={3} y={5} />
                                  <rect height={1} width={1} x={4} y={7} />
                                  <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439" />
                                  <rect height={1} width={1} x={2} y={12} />
                                  <rect height={1} width={1} x={2} y={9} />
                                  <rect height={1} width={1} x={2} y={15} />
                                  <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10" />
                                  <rect height={1} width={1} x={3} y={8} />
                                  <path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z" />
                                  <path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z" />
                                  <path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z" />
                                  <rect height={1} width={1} x={12} y={2} />
                                  <rect height={1} width={1} x={11} y={3} />
                                  <path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z" />
                                  <rect height={1} width={1} x={2} y={3} />
                                  <rect height={1} width={1} x={6} y={2} />
                                  <rect height={1} width={1} x={3} y={2} />
                                  <rect height={1} width={1} x={5} y={3} />
                                  <rect height={1} width={1} x={9} y={2} />
                                  <rect height={1} width={1} x={15} y={14} />
                                  <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174" />
                                  <rect height={1} width={1} x={13} y={7} />
                                  <rect height={1} width={1} x={15} y={5} />
                                  <rect height={1} width={1} x={14} y={6} />
                                  <rect height={1} width={1} x={15} y={8} />
                                  <rect height={1} width={1} x={14} y={9} />
                                  <path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z" />
                                  <rect height={1} width={1} x={14} y={3} />
                                  <polygon points="12 6.868 12 6 11.62 6 12 6.868" />
                                  <rect height={1} width={1} x={15} y={2} />
                                  <rect height={1} width={1} x={12} y={5} />
                                  <rect height={1} width={1} x={13} y={4} />
                                  <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9" />
                                  <rect height={1} width={1} x={9} y={14} />
                                  <rect height={1} width={1} x={8} y={15} />
                                  <path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z" />
                                  <rect height={1} width={1} x={5} y={15} />
                                  <path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z" />
                                  <rect height={1} width={1} x={11} y={15} />
                                  <path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z" />
                                  <rect height={1} width={1} x={14} y={15} />
                                  <rect height={1} width={1} x={15} y={11} />
                                </g>
                                <polyline
                                  className="ql-stroke"
                                  points="5.5 13 9 5 12.5 13"
                                />
                                <line
                                  className="ql-stroke"
                                  x1="11.63"
                                  x2="6.38"
                                  y1={11}
                                  y2={11}
                                />
                              </svg>
                            </span>
                            <span
                              className="ql-picker-options"
                              aria-hidden="true"
                              tabIndex={-1}
                              id="ql-picker-options-3"
                            >
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-primary"
                                data-value="#000000"
                                style={{ backgroundColor: "rgb(0, 0, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-primary"
                                data-value="#e60000"
                                style={{ backgroundColor: "rgb(230, 0, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-primary"
                                data-value="#ff9900"
                                style={{ backgroundColor: "rgb(255, 153, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-primary"
                                data-value="#ffff00"
                                style={{ backgroundColor: "rgb(255, 255, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-primary"
                                data-value="#008a00"
                                style={{ backgroundColor: "rgb(0, 138, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-primary"
                                data-value="#0066cc"
                                style={{ backgroundColor: "rgb(0, 102, 204)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-primary"
                                data-value="#9933ff"
                                style={{ backgroundColor: "rgb(153, 51, 255)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-selected"
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#facccc"
                                style={{
                                  backgroundColor: "rgb(250, 204, 204)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#ffebcc"
                                style={{
                                  backgroundColor: "rgb(255, 235, 204)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#ffffcc"
                                style={{
                                  backgroundColor: "rgb(255, 255, 204)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#cce8cc"
                                style={{
                                  backgroundColor: "rgb(204, 232, 204)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#cce0f5"
                                style={{
                                  backgroundColor: "rgb(204, 224, 245)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#ebd6ff"
                                style={{
                                  backgroundColor: "rgb(235, 214, 255)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#bbbbbb"
                                style={{
                                  backgroundColor: "rgb(187, 187, 187)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#f06666"
                                style={{
                                  backgroundColor: "rgb(240, 102, 102)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#ffc266"
                                style={{
                                  backgroundColor: "rgb(255, 194, 102)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#ffff66"
                                style={{
                                  backgroundColor: "rgb(255, 255, 102)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#66b966"
                                style={{
                                  backgroundColor: "rgb(102, 185, 102)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#66a3e0"
                                style={{
                                  backgroundColor: "rgb(102, 163, 224)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#c285ff"
                                style={{
                                  backgroundColor: "rgb(194, 133, 255)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#888888"
                                style={{
                                  backgroundColor: "rgb(136, 136, 136)",
                                }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#a10000"
                                style={{ backgroundColor: "rgb(161, 0, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#b26b00"
                                style={{ backgroundColor: "rgb(178, 107, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#b2b200"
                                style={{ backgroundColor: "rgb(178, 178, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#006100"
                                style={{ backgroundColor: "rgb(0, 97, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#0047b2"
                                style={{ backgroundColor: "rgb(0, 71, 178)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#6b24b2"
                                style={{ backgroundColor: "rgb(107, 36, 178)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#444444"
                                style={{ backgroundColor: "rgb(68, 68, 68)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#5c0000"
                                style={{ backgroundColor: "rgb(92, 0, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#663d00"
                                style={{ backgroundColor: "rgb(102, 61, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#666600"
                                style={{ backgroundColor: "rgb(102, 102, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#003700"
                                style={{ backgroundColor: "rgb(0, 55, 0)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#002966"
                                style={{ backgroundColor: "rgb(0, 41, 102)" }}
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="#3d1466"
                                style={{ backgroundColor: "rgb(61, 20, 102)" }}
                              />
                            </span>
                          </span>
                          <select
                            className="ql-background"
                            style={{ display: "none" }}
                          >
                            <option value="#000000" />
                            <option value="#e60000" />
                            <option value="#ff9900" />
                            <option value="#ffff00" />
                            <option value="#008a00" />
                            <option value="#0066cc" />
                            <option value="#9933ff" />
                            <option value="selected" />
                            <option value="#facccc" />
                            <option value="#ffebcc" />
                            <option value="#ffffcc" />
                            <option value="#cce8cc" />
                            <option value="#cce0f5" />
                            <option value="#ebd6ff" />
                            <option value="#bbbbbb" />
                            <option value="#f06666" />
                            <option value="#ffc266" />
                            <option value="#ffff66" />
                            <option value="#66b966" />
                            <option value="#66a3e0" />
                            <option value="#c285ff" />
                            <option value="#888888" />
                            <option value="#a10000" />
                            <option value="#b26b00" />
                            <option value="#b2b200" />
                            <option value="#006100" />
                            <option value="#0047b2" />
                            <option value="#6b24b2" />
                            <option value="#444444" />
                            <option value="#5c0000" />
                            <option value="#663d00" />
                            <option value="#666600" />
                            <option value="#003700" />
                            <option value="#002966" />
                            <option value="#3d1466" />
                          </select>
                        </span>
                        <span className="ql-formats">
                          <span className="ql-font ql-picker">
                            <span
                              className="ql-picker-label"
                              tabIndex={0}
                              role="button"
                              aria-expanded="false"
                              aria-controls="ql-picker-options-4"
                            >
                              <svg viewBox="0 0 18 18">
                                <polygon
                                  className="ql-stroke"
                                  points="7 11 9 13 11 11 7 11"
                                />
                                <polygon
                                  className="ql-stroke"
                                  points="7 7 9 5 11 7 7 7"
                                />
                              </svg>
                            </span>
                            <span
                              className="ql-picker-options"
                              aria-hidden="true"
                              tabIndex={-1}
                              id="ql-picker-options-4"
                            >
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-selected"
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="serif"
                              />
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="monospace"
                              />
                            </span>
                          </span>
                          <select
                            className="ql-font"
                            style={{ display: "none" }}
                          >
                            <option value="selected" />
                            <option value="serif" />
                            <option value="monospace" />
                          </select>
                        </span>
                        <span className="ql-formats">
                          <span className="ql-align ql-picker ql-icon-picker">
                            <span
                              className="ql-picker-label"
                              tabIndex={0}
                              role="button"
                              aria-expanded="false"
                              aria-controls="ql-picker-options-5"
                            >
                              <svg viewBox="0 0 18 18">
                                <line
                                  className="ql-stroke"
                                  x1={3}
                                  x2={15}
                                  y1={9}
                                  y2={9}
                                />
                                <line
                                  className="ql-stroke"
                                  x1={3}
                                  x2={13}
                                  y1={14}
                                  y2={14}
                                />
                                <line
                                  className="ql-stroke"
                                  x1={3}
                                  x2={9}
                                  y1={4}
                                  y2={4}
                                />
                              </svg>
                            </span>
                            <span
                              className="ql-picker-options"
                              aria-hidden="true"
                              tabIndex={-1}
                              id="ql-picker-options-5"
                            >
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item ql-selected"
                              >
                                <svg viewBox="0 0 18 18">
                                  <line
                                    className="ql-stroke"
                                    x1={3}
                                    x2={15}
                                    y1={9}
                                    y2={9}
                                  />
                                  <line
                                    className="ql-stroke"
                                    x1={3}
                                    x2={13}
                                    y1={14}
                                    y2={14}
                                  />
                                  <line
                                    className="ql-stroke"
                                    x1={3}
                                    x2={9}
                                    y1={4}
                                    y2={4}
                                  />
                                </svg>
                              </span>
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="center"
                              >
                                <svg viewBox="0 0 18 18">
                                  <line
                                    className="ql-stroke"
                                    x1={15}
                                    x2={3}
                                    y1={9}
                                    y2={9}
                                  />
                                  <line
                                    className="ql-stroke"
                                    x1={14}
                                    x2={4}
                                    y1={14}
                                    y2={14}
                                  />
                                  <line
                                    className="ql-stroke"
                                    x1={12}
                                    x2={6}
                                    y1={4}
                                    y2={4}
                                  />
                                </svg>
                              </span>
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="right"
                              >
                                <svg viewBox="0 0 18 18">
                                  <line
                                    className="ql-stroke"
                                    x1={15}
                                    x2={3}
                                    y1={9}
                                    y2={9}
                                  />
                                  <line
                                    className="ql-stroke"
                                    x1={15}
                                    x2={5}
                                    y1={14}
                                    y2={14}
                                  />
                                  <line
                                    className="ql-stroke"
                                    x1={15}
                                    x2={9}
                                    y1={4}
                                    y2={4}
                                  />
                                </svg>
                              </span>
                              <span
                                tabIndex={0}
                                role="button"
                                className="ql-picker-item"
                                data-value="justify"
                              >
                                <svg viewBox="0 0 18 18">
                                  <line
                                    className="ql-stroke"
                                    x1={15}
                                    x2={3}
                                    y1={9}
                                    y2={9}
                                  />
                                  <line
                                    className="ql-stroke"
                                    x1={15}
                                    x2={3}
                                    y1={14}
                                    y2={14}
                                  />
                                  <line
                                    className="ql-stroke"
                                    x1={15}
                                    x2={3}
                                    y1={4}
                                    y2={4}
                                  />
                                </svg>
                              </span>
                            </span>
                          </span>
                          <select
                            className="ql-align"
                            style={{ display: "none" }}
                          >
                            <option value="selected" />
                            <option value="center" />
                            <option value="right" />
                            <option value="justify" />
                          </select>
                        </span>
                        <span className="ql-formats">
                          <button
                            type="button"
                            className="ql-clean"
                            aria-pressed="false"
                            aria-label="clean"
                          >
                            <svg  viewBox="0 0 18 18">
                              <line
                                className="ql-stroke"
                                x1={5}
                                x2={13}
                                y1={3}
                                y2={3}
                              />
                              <line
                                className="ql-stroke"
                                x1={6}
                                x2="9.35"
                                y1={12}
                                y2={3}
                              />
                              <line
                                className="ql-stroke"
                                x1={11}
                                x2={15}
                                y1={11}
                                y2={15}
                              />
                              <line
                                className="ql-stroke"
                                x1={15}
                                x2={11}
                                y1={11}
                                y2={15}
                              />
                              <rect
                                className="ql-fill"
                                height={1}
                                rx="0.5"
                                ry="0.5"
                                width={7}
                                x={2}
                                y={14}
                              />
                            </svg>
                          </button>
                        </span>
                      </div>
                      <div
                        className="h-48 ql-container ql-snow"
                        x-init="$el._x_quill = new Quill($el,{
                      modules : {
                        toolbar: [
                          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                          ['blockquote', 'code-block'],
                          [{ header: 1 }, { header: 2 }], // custom button values
                          [{ list: 'ordered' }, { list: 'bullet' }],
                          [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
                          [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
                          [{ direction: 'rtl' }], // text direction
                          [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
                          [{ header: [1, 2, 3, 4, 5, 6, false] }],
                          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                          [{ font: [] }],
                          [{ align: [] }],
                          ['clean'], // remove formatting button
                        ],
                      },
                      placeholder: 'Enter your content...',
                      theme: 'snow',
                    })"
                      >
                        <div
                          className="ql-editor ql-blank"
                          contentEditable="true"
                          // data-placeholder="write something...."
                         
                        >
                          <p>
                            <br />
                          </p>
                        </div>
                        <div className="ql-tooltip ql-hidden">
                          <a
                            className="ql-preview"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="about:blank"
                          />
                          <input
                            type="text"
                            data-formula="e=mc^2"
                            data-link="https://quilljs.com"
                            data-video="Embed URL"
                          />
                          <a className="ql-action" />
                          <a className="ql-remove" />
                        </div>
                      </div>
                    </div>
                
                    <div className="flex space-x-4">
                  <label className="block flex-1">
                  Phone
                    <input
                      className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Service Name"
                      type="text"
                    />
                  </label>
                  <label className="block flex-1">
                  Time Zone
                    <input
                      className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Amount"
                      type="text"
                    />
                  </label>
                  </div>

                  <div className="flex space-x-4">
                  <label className="block flex-1">
                  Facebook
                    <input
                      className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Service Name"
                      type="text"
                    />
                  </label>
                  <label className="block flex-1">
                  Twitter
                    <input
                      className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Amount"
                      type="email"
                    />
                  </label>
                  </div>
                  <div className="flex space-x-4">
                  <div className='ml-2 flex-1'>
       {imagePreview && (
        <div className="mb-2">
          <img
            src={imagePreview}
            alt="Selected"
            className="w-32 h-32 object-cover border rounded"
          />
        </div>
      )}
      <label className="w-1/3 flex items-center justify-center border rounded p-2 cursor-pointer bg-blue-500 text-white">
        Select Image
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden" // Hide the default file input
        />
      </label>
      </div>
      <div className='ml-2 flex-1'>
       {imagePreview && (
        <div className="mb-2">
          <img
            src={imagePreview}
            alt="Selected"
            className="w-32 h-32 object-cover border rounded"
          />
        </div>
      )}
      <label className="w-1/3 flex items-center justify-center border rounded p-2 cursor-pointer bg-blue-500 text-white">
        Select Image
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden" // Hide the default file input
        />
      </label>
      </div>
      </div>

                  <button
              type="submit"
              className="bg-primary text-white rounded p-2 w-1/5"
            >
              Add
            </button>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="card space-y-5 p-4 sm:p-5">
          
           <h2 className="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">
           Site Maintenance
</h2>

             
            <form>
      {/* Maintenance Text Box */}
      <div className="mb-4">
        <label htmlFor="maintenance" className="block text-sm font-medium text-gray-700">
        Maintenance Title
        </label>
        <textarea
              id="maintenance"
              name="maintenance"
              rows={4} // Set the number of visible rows
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-4"
              placeholder="" // No placeholder since we are using default text
              value={maintenanceText} // Controlled component
              onChange={handleChange} // Update state on change
            />
      </div>

      {/* Maintenance Mode Switch */}
      <div className="flex items-center mb-4">
        
        <label className="inline-flex items-center space-x-2">
  <input className="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white" type="checkbox" />
  <span>Maintenance Mode</span>
</label>

      </div>

      {/* Update Button */}
      <div>
        <button
          type="submit"
          className="w-1/3 bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary"
        >
          Update
        </button>
      </div>
    </form>
              
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default page;
