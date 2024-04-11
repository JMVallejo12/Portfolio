import './AboutStyle.css'
import picture from '../../assets/profile-picture.jpeg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function About (){

    return(
        <div className='about-container'>
            <div className='title-container'>
                <h1 className='title-style'>TITULO</h1>
            </div>

            <div className='under-container'>
                <div className='content-container'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum porro saepe facilis nihil! Eaque pariatur consequatur quod voluptas unde? Excepturi tempora commodi architecto fuga dolorem aliquid ipsa. Maxime, eius?
                    Laboriosam dolor voluptas sequi veritatis sunt sed hic excepturi rerum, autem consequuntur dignissimos cupiditate. Fugit eum eligendi maiores ab libero quod quia consequuntur praesentium alias impedit! Architecto recusandae ipsam in!
                    Mollitia architecto laudantium quaerat consequatur, rerum recusandae eligendi est tenetur velit. Eum accusantium impedit dolorem nesciunt, nostrum reprehenderit ratione magni quibusdam nisi, rerum, asperiores quia voluptatibus praesentium nemo tenetur molestiae?
                </div>

                <div className='picture-container'>
                    <img src={picture} alt="Foto de perfil"  className='picture-style'/>
                    <div className='icons-container'>
                        <a href="https://www.linkedin.com/in/juan-manuel-vallejo-couchet-17836826a/" target='_blank'  className='linked-icon'><LinkedInIcon/></a>
                        <a href="https://github.com/JMVallejo12" target='_blank'  className='git-icon'><GitHubIcon/></a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About