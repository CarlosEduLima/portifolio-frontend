import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Education from '../../components/education';
import Experience from '../../components/experience';
import Skills from '../../components/skills';
import Main from '../../components/main'
import api from '../../service/api'
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        fontFamily: 'sans-serif',
        fontWeight: 'lighter'
    },
    text: {
        fontFamily: 'sans-serif',
        fontSize: '16px',
        fontWeight: 'lighter'
    },
    resumeRightCol: {
        background: '#f2f2f2',
        padding: '2em',
        fontFamily: 'sans-serif',
        fontWeight: 'lighter'
    }
}));
export default function Resume() {
    const [info, setInfo] = useState([]);
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [skill, setSkill] = useState([]);
    useEffect(() => {
        async function loadInfo() {
            const response = await api.get('/info');
            setInfo(response.data.info[0]);
        };
        async function loadEducation() {
            const response = await api.get('/education');
            setEducation(response.data.education);
        };
        async function loadExperience() {
            const response = await api.get('/experience');
            setExperience(response.data.experience);
        };
        async function loadSkills() {
            const response = await api.get('/skills');
            setSkill(response.data.skill);
        };
        loadInfo()
        loadEducation()
        loadExperience()
        loadSkills()
    }, []);
    const classes = useStyles()
    return (
        <>
            <Main>
                <Grid container className={classes.root} spacing={3}>
                    <Grid item lg={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src={info.img_url}
                                alt="avatar"
                                style={{ height: '200px', borderRadius: '10%' }}
                            />
                        </div>
                        <h1 style={{ fontFamily: 'sans-serif', paddingTop: '2em' }}>{info.name}</h1>
                        <h2 style={{ fontFamily: 'sans-serif', color: 'grey' }}>{info.profession}</h2>
                        <hr style={{ borderTop: '3px solid  linear-gradient(to right, #642b73, #c6426e)', width: '50%' }} />
                        <p className={classes.text}>Desenvolvo aplicações web utilizando as tecnologias mais recentes como NodeJS e ReactJS, com foco no desenvolvimento de API's REST usando NodeJS, Sequelize e PostgreSQL.</p>
                        <hr style={{ borderTop: '3px solid  linear-gradient(to right, #642b73, #c6426e)', width: '50%' }} />
                        <h3>Endereço</h3>
                        <p className={classes.text}>{info.address}</p>
                        <h3>Telefone/WhatsApp</h3>
                        <p className={classes.text}>{info.phone}</p>
                        <h3>E-mail</h3>
                        <p className={classes.text} >{info.email}</p>
                        <h3>Portifolio</h3>
                        <p className={classes.text}>mywebsite.com</p>
                    </Grid>
                    <Grid className={classes.resumeRightCol} item lg={8}>
                        <h2>Educação</h2>
                        {education.map(education => (
                            <Education
                                startYear={education.start_date}
                                endYear={education.end_date}
                                schoolName={education.institution_name}
                                schoolDescription={education.course_name}
                            />
                        ))}
                        <hr style={{ borderTop: '3px solid linear-gradient(to right, #642b73, #c6426e) ' }} />

                        <h2>Experiencia</h2>
                        {experience.map(experience => (
                            <Experience
                                startYear={experience.start_date}
                                endYear={experience.end_date}
                                jobName={experience.company}
                                jobDescription={experience.role}
                            />
                        ))}

                        <hr style={{ borderTop: '3px solid white' }} />
                        <h2>Habilidades</h2>
                        {skill.map(skill => (
                            <Skills
                                skill={skill.name}
                                progress={skill.knowledge_level}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Main>
        </>
    )
}

