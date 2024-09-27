export default function Home(){

    return(
        <div class="flex flex-col text-center lg:text-left lg:flex-row items-center justify-evenly mx-[10dvw] w-[80dvw] h-[80dvh]">
            <div class="pic border-4 border-solid border-white rounded-full lg:w-[250px] lg:h-[250px] w-[200px] h-[200px] "></div>
            <div class="w-[80%] lg:w-max h-max">
                <h1 class="text-[22px] sm:text-[28px]">Welcome to My Portfolio!</h1>
                <p>I am Sanjay. I am Currently working as a Junior Software Engineer.</p>
            </div>
        </div>
    );
}