import github from '../images/icons8-github.svg'
import gmail from '../images/gmail.svg'
import insta from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import whatsap from '../images/whats-app.svg'

export default function Contact(){
    return (
        <div class="flex flex-col items-center justify-evenly md:flex-row mx-[10dvw] w-[80dvw] h-[80dvh]">
            <div class="flex justify-center items-center text-center py-4 w-[100%] md:w-1/2 md:text-left">
                <h2 class="text-[20px] md:text-[26px]">All the contact details here are 100% legit. You'll get a reply faster than you can scroll through your feed!</h2>
            </div>
            <div class="grid grid-cols-5 md:grid-cols-3 place-content-stretch place-items-center w-[100%] h-max md:w-1/2 md:h-full ">
                <div class=" w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] filter invert"><a href="https://www.instagram.com/sanjay150920/"><img src={insta} alt="ins" /></a></div>
                <div class=" w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] filter invert"><a href="https://www.linkedin.com/in/s anjay-v-a7857120a"><img src={linkedin} alt="linkedin" /></a></div>
                <div class=" w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] filter invert"><a href="mailto:sanjay159000@gmail.com"><img src={gmail} alt="mail" /></a></div>
                <div class=" w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] filter invert"><a href="http://wa.me/+919789041989"><img src={whatsap} alt="whatsap" /></a></div>
                <div class=" w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] filter invert"><a href="https://github.com/Sanjay1592000"><img src={github} alt="github" /></a></div>
             </div>
        </div>
    );
}