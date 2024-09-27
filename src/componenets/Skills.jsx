export default function Skills(){
    return(
        <div class=" grid grid-cols-1 h-max md:grid-cols-2 lg:grid-cols-3 gap-10 mx-[10dvw] py-[10dvh] w-[80dvw] lg:h-[80dvh]">
            <div class=" border-4 p-5 border-solid border-white rounded-3xl ">
                <h2 class="my-3 text-[20px] md:text-[26px]">Technical Skills</h2>
                <div class="lists">
                    <div class="flex items-center">
                        <div class="cpp mx-1 w-5 h-5 filter invert"></div><p>C++</p>
                    </div>
                    <div class="flex items-center">
                        <div class="cs mx-1 w-5 h-5 filter invert"></div><p>C#</p>
                    </div>
                    <div class="flex items-center">
                        <div class="sql mx-1 w-5 h-5 filter invert"></div><p>SQL and PL/SQL</p>
                    </div>
                    <div class="flex items-center">
                        <div class="html mx-1 w-5 h-5 filter invert"></div><p>HTML</p>
                    </div>
                    <div class="flex items-center">
                        <div class="css mx-1 w-5 h-5 filter invert"></div><p>CSS</p>
                    </div>
                    <div class="flex items-center">
                        <div class="js mx-1 w-5 h-5 filter invert"></div><p>JavaScript</p>
                    </div>
                    <div class="flex items-center">
                        <div class="python mx-1 w-5 h-5 filter invert"></div><p>Python</p>
                    </div>
                </div>
            </div>
            <div class="border-4 border-solid p-5 border-white rounded-3xl ">
                <h2 class="my-3 text-[20px] md:text-[26px]">Software Skills</h2>
                <div class="lists">
                    <div class="flex items-center">
                        <div class="github mx-1 w-5 h-5 filter invert"></div><p>Github</p>
                    </div>
                    <div class="flex items-center">
                        <div class="mysql mx-1 w-5 h-5 filter invert"></div><p>MySQL</p>
                    </div>
                    <div class="flex items-center">
                        <div class="vs mx-1 w-5 h-5 filter invert"></div><p>Visual Studio Code</p>
                    </div>
                    <div class="flex items-center">
                        <div class="vsc mx-1 w-5 h-5 filter invert"></div><p>Visual Studio Community Edition</p>
                    </div>
                </div>
            </div>
            <div class="border-4 border-solid p-5 border-white rounded-3xl ">
                <h2 class="my-3 text-[20px] md:text-[26px]">Languages known</h2>
                <div class="lists">
                    <div class="points">
                        <p>Tamil - Read, Write and Speak</p>
                    </div>
                    <div class="points">
                        <p>English - Read, Write and Speak</p>
                    </div>
                </div>
            </div>
        </div>
    );
}