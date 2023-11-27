import '../app/css/pages-styles/documents.css';

export default function Documentations() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">All Research Documentations</h2>
            <p className="text-xl text-gray-400">Do you want to study about our product? Explore research documentation...</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div id="docDiv" className="relative flex flex-col items" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="relative flex flex-row items">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 512 512"><g>
                  <path d="M441.412 140.235v338.781c0 18.219-14.778 32.983-32.983 32.983H103.572c-18.219 0-32.983-14.764-32.983-32.983V32.983C70.588 14.764 85.352 0 103.572 0h197.605l140.235 140.235z" fill="#518ef8" data-original="#518ef8"></path>
                  <path d="M161.18 257.054h189.626v21.071H161.18zM161.18 304.112h189.626v21.071H161.18zM161.18 351.171h189.626v21.071H161.18zM161.18 398.23h134.855v21.071H161.18z" fill="#ffffff" data-original="#ffffff"></path>
                  <path d="m320.31 137.188 121.102 49.891v-46.844l-68.661-20.273z" fill="#3a5bbc" data-original="#3a5bbc"></path><path d="M441.412 140.235H334.16c-18.22 0-32.983-14.764-32.983-32.983V0l140.235 140.235z" fill="#acd1fc" data-original="#acd1fc"></path></g>
                </svg>
                &nbsp;
                <p className="text-lg text-gray-400 text">Document</p>
              </div>
              <h4 className="h4 mb-2">Topic Assessment</h4>
              <hr/>
              <div data-aos="fade-up" data-aos-delay="400">
                <a style={{borderRadius: '5px'}} className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Download 🍟</a>
              </div>
            </div>

            {/* 2nd item */}
            <div id="docDiv" className="relative flex flex-col items" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="relative flex flex-row items">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 512 512"><g>
                  <path d="M441.412 140.235v338.781c0 18.219-14.778 32.983-32.983 32.983H103.572c-18.219 0-32.983-14.764-32.983-32.983V32.983C70.588 14.764 85.352 0 103.572 0h197.605l140.235 140.235z" fill="#518ef8" data-original="#518ef8"></path>
                  <path d="M161.18 257.054h189.626v21.071H161.18zM161.18 304.112h189.626v21.071H161.18zM161.18 351.171h189.626v21.071H161.18zM161.18 398.23h134.855v21.071H161.18z" fill="#ffffff" data-original="#ffffff"></path>
                  <path d="m320.31 137.188 121.102 49.891v-46.844l-68.661-20.273z" fill="#3a5bbc" data-original="#3a5bbc"></path><path d="M441.412 140.235H334.16c-18.22 0-32.983-14.764-32.983-32.983V0l140.235 140.235z" fill="#acd1fc" data-original="#acd1fc"></path></g>
                </svg>
                &nbsp;
                <p className="text-lg text-gray-400 text">Document</p>
              </div>
              <h4 className="h4 mb-2">Project Charter</h4>
              <hr/>
              <div data-aos="fade-up" data-aos-delay="400">
                <a style={{borderRadius: '5px'}} className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Download 🍟</a>
              </div>
            </div>

            {/* 3rd item */}
            <div id="docDiv" className="relative flex flex-col items" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="relative flex flex-row items">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 512 512"><g>
                  <path d="M441.412 140.235v338.781c0 18.219-14.778 32.983-32.983 32.983H103.572c-18.219 0-32.983-14.764-32.983-32.983V32.983C70.588 14.764 85.352 0 103.572 0h197.605l140.235 140.235z" fill="#518ef8" data-original="#518ef8"></path>
                  <path d="M161.18 257.054h189.626v21.071H161.18zM161.18 304.112h189.626v21.071H161.18zM161.18 351.171h189.626v21.071H161.18zM161.18 398.23h134.855v21.071H161.18z" fill="#ffffff" data-original="#ffffff"></path>
                  <path d="m320.31 137.188 121.102 49.891v-46.844l-68.661-20.273z" fill="#3a5bbc" data-original="#3a5bbc"></path><path d="M441.412 140.235H334.16c-18.22 0-32.983-14.764-32.983-32.983V0l140.235 140.235z" fill="#acd1fc" data-original="#acd1fc"></path></g>
                </svg>
                &nbsp;
                <p className="text-lg text-gray-400 text">Document</p>
              </div>
              <h4 className="h4 mb-2">Project Proposal</h4>
              <hr/>
              <div data-aos="fade-up" data-aos-delay="400">
                <a style={{borderRadius: '5px'}} className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Download 🍟</a>
              </div>
            </div>

            {/* 4th item */}
            <div id="docDiv" className="relative flex flex-col items" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="relative flex flex-row items">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 512 512"><g>
                  <path d="M441.412 140.235v338.781c0 18.219-14.778 32.983-32.983 32.983H103.572c-18.219 0-32.983-14.764-32.983-32.983V32.983C70.588 14.764 85.352 0 103.572 0h197.605l140.235 140.235z" fill="#518ef8" data-original="#518ef8"></path>
                  <path d="M161.18 257.054h189.626v21.071H161.18zM161.18 304.112h189.626v21.071H161.18zM161.18 351.171h189.626v21.071H161.18zM161.18 398.23h134.855v21.071H161.18z" fill="#ffffff" data-original="#ffffff"></path>
                  <path d="m320.31 137.188 121.102 49.891v-46.844l-68.661-20.273z" fill="#3a5bbc" data-original="#3a5bbc"></path><path d="M441.412 140.235H334.16c-18.22 0-32.983-14.764-32.983-32.983V0l140.235 140.235z" fill="#acd1fc" data-original="#acd1fc"></path></g>
                </svg>
                &nbsp;
                <p className="text-lg text-gray-400 text">Document</p>
              </div>
              <h4 className="h4 mb-2">Project Proposal PPT</h4>
              <hr/>
              <div data-aos="fade-up" data-aos-delay="400">
                <a style={{borderRadius: '5px'}} className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Download 🍟</a>
              </div>
            </div>

            {/* 5th item */}
            <div id="docDiv" className="relative flex flex-col items" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="relative flex flex-row items">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 512 512"><g>
                  <path d="M441.412 140.235v338.781c0 18.219-14.778 32.983-32.983 32.983H103.572c-18.219 0-32.983-14.764-32.983-32.983V32.983C70.588 14.764 85.352 0 103.572 0h197.605l140.235 140.235z" fill="#518ef8" data-original="#518ef8"></path>
                  <path d="M161.18 257.054h189.626v21.071H161.18zM161.18 304.112h189.626v21.071H161.18zM161.18 351.171h189.626v21.071H161.18zM161.18 398.23h134.855v21.071H161.18z" fill="#ffffff" data-original="#ffffff"></path>
                  <path d="m320.31 137.188 121.102 49.891v-46.844l-68.661-20.273z" fill="#3a5bbc" data-original="#3a5bbc"></path><path d="M441.412 140.235H334.16c-18.22 0-32.983-14.764-32.983-32.983V0l140.235 140.235z" fill="#acd1fc" data-original="#acd1fc"></path></g>
                </svg>
                &nbsp;
                <p className="text-lg text-gray-400 text">Document</p>
              </div>
              <h4 className="h4 mb-2">Progress Presentation I</h4>
              <hr/>
              <div data-aos="fade-up" data-aos-delay="400">
                <a style={{borderRadius: '5px'}} className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Download 🍟</a>
              </div>
            </div>

            {/* 6th item */}
            <div id="docDiv" className="relative flex flex-col items" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="relative flex flex-row items">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 512 512"><g>
                  <path d="M441.412 140.235v338.781c0 18.219-14.778 32.983-32.983 32.983H103.572c-18.219 0-32.983-14.764-32.983-32.983V32.983C70.588 14.764 85.352 0 103.572 0h197.605l140.235 140.235z" fill="#518ef8" data-original="#518ef8"></path>
                  <path d="M161.18 257.054h189.626v21.071H161.18zM161.18 304.112h189.626v21.071H161.18zM161.18 351.171h189.626v21.071H161.18zM161.18 398.23h134.855v21.071H161.18z" fill="#ffffff" data-original="#ffffff"></path>
                  <path d="m320.31 137.188 121.102 49.891v-46.844l-68.661-20.273z" fill="#3a5bbc" data-original="#3a5bbc"></path><path d="M441.412 140.235H334.16c-18.22 0-32.983-14.764-32.983-32.983V0l140.235 140.235z" fill="#acd1fc" data-original="#acd1fc"></path></g>
                </svg>
                &nbsp;
                <p className="text-lg text-gray-400 text">Document</p>
              </div>
              <h4 className="h4 mb-2">Status Documents I</h4>
              <hr/>
              <div data-aos="fade-up" data-aos-delay="400">
                <a style={{borderRadius: '5px'}} className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Download 🍟</a>
              </div>
            </div>

            {/* 7th item */}
            <div id="docDiv" className="relative flex flex-col items" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="relative flex flex-row items">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 512 512"><g>
                  <path d="M441.412 140.235v338.781c0 18.219-14.778 32.983-32.983 32.983H103.572c-18.219 0-32.983-14.764-32.983-32.983V32.983C70.588 14.764 85.352 0 103.572 0h197.605l140.235 140.235z" fill="#518ef8" data-original="#518ef8"></path>
                  <path d="M161.18 257.054h189.626v21.071H161.18zM161.18 304.112h189.626v21.071H161.18zM161.18 351.171h189.626v21.071H161.18zM161.18 398.23h134.855v21.071H161.18z" fill="#ffffff" data-original="#ffffff"></path>
                  <path d="m320.31 137.188 121.102 49.891v-46.844l-68.661-20.273z" fill="#3a5bbc" data-original="#3a5bbc"></path><path d="M441.412 140.235H334.16c-18.22 0-32.983-14.764-32.983-32.983V0l140.235 140.235z" fill="#acd1fc" data-original="#acd1fc"></path></g>
                </svg>
                &nbsp;
                <p className="text-lg text-gray-400 text">Document</p>
              </div>
              <h4 className="h4 mb-2">Progress Presentation II</h4>
              <hr/>
              <div data-aos="fade-up" data-aos-delay="400">
                <a style={{borderRadius: '5px'}} className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Download 🍟</a>
              </div>
            </div>

            {/* 8th item */}
            <div id="docDiv" className="relative flex flex-col items" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="relative flex flex-row items">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 512 512"><g>
                  <path d="M441.412 140.235v338.781c0 18.219-14.778 32.983-32.983 32.983H103.572c-18.219 0-32.983-14.764-32.983-32.983V32.983C70.588 14.764 85.352 0 103.572 0h197.605l140.235 140.235z" fill="#518ef8" data-original="#518ef8"></path>
                  <path d="M161.18 257.054h189.626v21.071H161.18zM161.18 304.112h189.626v21.071H161.18zM161.18 351.171h189.626v21.071H161.18zM161.18 398.23h134.855v21.071H161.18z" fill="#ffffff" data-original="#ffffff"></path>
                  <path d="m320.31 137.188 121.102 49.891v-46.844l-68.661-20.273z" fill="#3a5bbc" data-original="#3a5bbc"></path><path d="M441.412 140.235H334.16c-18.22 0-32.983-14.764-32.983-32.983V0l140.235 140.235z" fill="#acd1fc" data-original="#acd1fc"></path></g>
                </svg>
                &nbsp;
                <p className="text-lg text-gray-400 text">Document</p>
              </div>
              <h4 className="h4 mb-2">Status Documents II</h4>
              <hr/>
              <div data-aos="fade-up" data-aos-delay="400">
                <a style={{borderRadius: '5px'}} className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Download 🍟</a>
              </div>
            </div>

            {/* 9th item */}
            <div id="docDiv" className="relative flex flex-col items" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="relative flex flex-row items">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 512 512"><g>
                  <path d="M441.412 140.235v338.781c0 18.219-14.778 32.983-32.983 32.983H103.572c-18.219 0-32.983-14.764-32.983-32.983V32.983C70.588 14.764 85.352 0 103.572 0h197.605l140.235 140.235z" fill="#518ef8" data-original="#518ef8"></path>
                  <path d="M161.18 257.054h189.626v21.071H161.18zM161.18 304.112h189.626v21.071H161.18zM161.18 351.171h189.626v21.071H161.18zM161.18 398.23h134.855v21.071H161.18z" fill="#ffffff" data-original="#ffffff"></path>
                  <path d="m320.31 137.188 121.102 49.891v-46.844l-68.661-20.273z" fill="#3a5bbc" data-original="#3a5bbc"></path><path d="M441.412 140.235H334.16c-18.22 0-32.983-14.764-32.983-32.983V0l140.235 140.235z" fill="#acd1fc" data-original="#acd1fc"></path></g>
                </svg>
                &nbsp;
                <p className="text-lg text-gray-400 text">Document</p>
              </div>
              <h4 className="h4 mb-2">Research Paper</h4>
              <hr/>
              <div data-aos="fade-up" data-aos-delay="400">
                <a style={{borderRadius: '5px'}} className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Download 🍟</a>
              </div>
            </div>

            {/* 10th item */}
            <div id="docDiv" className="relative flex flex-col items" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="relative flex flex-row items">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 512 512"><g>
                  <path d="M441.412 140.235v338.781c0 18.219-14.778 32.983-32.983 32.983H103.572c-18.219 0-32.983-14.764-32.983-32.983V32.983C70.588 14.764 85.352 0 103.572 0h197.605l140.235 140.235z" fill="#518ef8" data-original="#518ef8"></path>
                  <path d="M161.18 257.054h189.626v21.071H161.18zM161.18 304.112h189.626v21.071H161.18zM161.18 351.171h189.626v21.071H161.18zM161.18 398.23h134.855v21.071H161.18z" fill="#ffffff" data-original="#ffffff"></path>
                  <path d="m320.31 137.188 121.102 49.891v-46.844l-68.661-20.273z" fill="#3a5bbc" data-original="#3a5bbc"></path><path d="M441.412 140.235H334.16c-18.22 0-32.983-14.764-32.983-32.983V0l140.235 140.235z" fill="#acd1fc" data-original="#acd1fc"></path></g>
                </svg>
                &nbsp;
                <p className="text-lg text-gray-400 text">Document</p>
              </div>
              <h4 className="h4 mb-2">Final Report</h4>
              <hr/>
              <div data-aos="fade-up" data-aos-delay="400">
                <a style={{borderRadius: '5px'}} className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Download 🍟</a>
              </div>
            </div>

            {/* 11th item */}
            <div id="docDiv" className="relative flex flex-col items" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="relative flex flex-row items">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 512 512"><g>
                  <path d="M441.412 140.235v338.781c0 18.219-14.778 32.983-32.983 32.983H103.572c-18.219 0-32.983-14.764-32.983-32.983V32.983C70.588 14.764 85.352 0 103.572 0h197.605l140.235 140.235z" fill="#518ef8" data-original="#518ef8"></path>
                  <path d="M161.18 257.054h189.626v21.071H161.18zM161.18 304.112h189.626v21.071H161.18zM161.18 351.171h189.626v21.071H161.18zM161.18 398.23h134.855v21.071H161.18z" fill="#ffffff" data-original="#ffffff"></path>
                  <path d="m320.31 137.188 121.102 49.891v-46.844l-68.661-20.273z" fill="#3a5bbc" data-original="#3a5bbc"></path><path d="M441.412 140.235H334.16c-18.22 0-32.983-14.764-32.983-32.983V0l140.235 140.235z" fill="#acd1fc" data-original="#acd1fc"></path></g>
                </svg>
                &nbsp;
                <p className="text-lg text-gray-400 text">Document</p>
              </div>
              <h4 className="h4 mb-2">Log Book</h4>
              <hr/>
              <div data-aos="fade-up" data-aos-delay="400">
                <a style={{borderRadius: '5px'}} className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Download 🍟</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
