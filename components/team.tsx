import Image from 'next/image'

import Supervisor from '@/public/images/team_images/Ms.Dinuka.png'
import CoSupervisor from '@/public/images/team_images/Dr.dilshan-silva.png'
import MemberOne from '@/public/images/team_images/MemberOne.png'
import MemberTwo from '@/public/images/team_images/MemberTwo.png'
import MemberThree from '@/public/images/team_images/MemberThree.png'
import MemberFour from '@/public/images/team_images/MemberFour.png'
import GroupImage from '@/public/images/TeamPoster.png'

export default function team() {
    return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Meet the Team - <a href='https://mysliit-my.sharepoint.com/:i:/g/personal/it20049218_my_sliit_lk/EdelbOTXYkJHgaOahsCBAPMBA217Vwy6i4QX_qmZoDwBgA?e=OYkgFV' target='_blank'>Team Pascal's</a></h2>
              <p className="text-xl text-gray-400">Discover the project's team members' </p>
            </div>
  
            {/* Testimonials */}
            <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

                {/* Supervisor */}
                <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
                <div>
                    <div className="relative inline-flex flex-col mb-4">
                    <Image className="rounded-full" src={Supervisor} width={300} height={300} alt="Supervisor" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                    </div>
                </div>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <a href='https://www.sliit.lk/faculty-of-computing/staff/dinuka.w/' target='_blank'><cite className="text-gray-200 not-italic">Ms. </cite><cite className="text-purple-600 not-italic">Dinuka</cite> <cite className="text-gray-200 not-italic">Wijendra</cite></a>
                </div>
                <blockquote className="text-md text-gray-400 grow">✉️ dinuka.w@sliit.lk </blockquote>
                </div>

                {/* Co-Supervisor */}
                <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
                <div>
                    <div className="relative inline-flex flex-col mb-4">
                    <Image className="rounded-full" src={CoSupervisor} width={300} height={300} alt="Co-Supervisor" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                    </div>
                </div>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <a href='https://www.sliit.lk/faculty-of-computing/staff/dilshan.i/' target='_blank'><cite className="text-gray-200 not-italic">Dr.</cite><cite className="text-purple-600 not-italic">Dilshan</cite> <cite className="text-gray-200 not-italic">De Silva</cite></a>
                </div>
                <blockquote className="text-md text-gray-400 grow">✉️ dilshan.i@sliit.lk </blockquote>
                </div>

                {/* 1st Member - Leader */}
                <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
                <div>
                    <div className="relative inline-flex flex-col mb-4">
                    <Image className="rounded-full" src={MemberOne} width={300} height={300} alt="1st Member - Leader" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                    </div>
                </div>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <a href='https://www.linkedin.com/in/sudhari-yhr/' target='_blank'><cite className="text-purple-600 not-italic">Sudhari</cite> <cite className="text-gray-200 not-italic">Perera</cite></a>
                </div>
                <blockquote className="text-md text-gray-400 grow">✉️ sudhari08sudh@gmail.com </blockquote>
                </div>

                {/* 2nd Member */}
                <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
                <div>
                    <div className="relative inline-flex flex-col mb-4">
                    <Image className="rounded-full" src={MemberTwo} width={300} height={300} alt="Member Two" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                    </div>
                </div>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <a href='https://www.linkedin.com/in/yasirupanduka/' target='_blank'><cite className="text-gray-200 not-italic">Yasiru</cite> <cite className="text-purple-600 not-italic">Panduka</cite></a>
                </div>
                <blockquote className="text-lg text-gray-400 grow">✉️ 22panduka@gmail.com</blockquote>
                </div>

                {/* 3rd Member */}
                <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
                <div>
                    <div className="relative inline-flex flex-col mb-4">
                    <Image className="rounded-full" src={MemberThree} width={300} height={300} alt="Member Three" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                    </div>
                </div>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <a href='https://www.linkedin.com/in/sewwandiweerawanni/' target='_blank'><cite className="text-purple-600 not-italic">Sewwandi</cite> <cite className="text-gray-200 not-italic">Weerawanni/</cite></a>
                </div>
                <blockquote className="text-md text-gray-400 grow">✉️ ssewwandiweerawanni@gmail.com </blockquote>
                </div>

                {/* 4th Member */}
                <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
                <div>
                    <div className="relative inline-flex flex-col mb-4">
                    <Image className="rounded-full" src={MemberFour} width={300} height={300} alt="Member Four" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                    </div>
                </div>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <a href='https://www.linkedin.com/in/harshana-rajapaksha/' target='_blank'><cite className="text-purple-600 not-italic">Harshana</cite> <cite className="text-gray-200 not-italic">Rajapaksha</cite></a>
                </div>
                <blockquote className="text-md text-gray-400 grow">✉️ har.rajapaksha@gmail.com </blockquote>
                </div>

            </div>
  
            </div>
        </div>
      </section>
    )
  }