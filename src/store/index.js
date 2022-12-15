import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resume: {
        name: 'Denisa',
        surname: 'Cirstea',
        role: 'FRONTEND DEVELOPER',
        phone: '+40 756 398 386',
        email: 'denisaicirstea@gmail.com',
        git: 'https://github.com/dnscrst',

        left: {
            about: {
                title: 'ABOUT',
                details: `<i>“Ordinem invenio in chaos. ”  <i/> <br>
                 For some people binary numbers and codes 
                are like a jungle where you can get lost.
                For me, they are like lego pieces that
                help you create art.`
            },

            work: {
                title: 'WORK EXPERIENCE',
                details: ` &#10070; C++ for school projects (2013-2017)<br/>
                &#10070; WordPress and HTML school and personal projects (2017-2021)<br/>
                &#10070; Frontend Developer Intern at SuperDev (2021-2022)<br/>
                &#10070; Vue JS for personal projects (since 2020)`
            },

            soft_skills: {
                title: 'SOFT SKILLS',
                details: `&#10070; Problem-Solving Attitude <br>
                        &#10070; Critical Thinking<br>
                        &#10070; Fast learning<br>
                        &#10070; Teamwork<br>
                        &#10070; Self-confidence <br>
                        &#10070; Self discipline<br>
                        &#10070; Punctuality <br>
                        &#10070; Perseverance<br>
                        &#10070; Ambition<br>
                        &#10070; Empathy<br>
                        &#10070; Creativity<br>
                        &#10070; Diplomacy<br>
                        &#10070; Ability to pivot and adapt quickly`
            },

            special_skills: {
                title: 'SPECIAL SKILLS',
                details: ` &#10070; Business and management<br>
                         &#10070; SEO and digital marketing knowledge<br>
                         &#10070; Leadership and project management<br>
                         &#10070; Microsoft office package<br>
                         &#10070; Photography and editing<br>
                         &#10070; E-commerce environment knowledge<br>
                         &#10070; Books addicted<br>
                         &#10070; Psychology`
            },
            languages: {
                title: 'LANGUAGES',
                details: ` Romanian - native<br>
                        English - B2<br>
                        Spanish - beginner<br>
                        French - beginner`
            },
        },

        right: {
            skills: [
                {
                    name: "HTML",
                    rate: 7
                },
                {
                    name: "CSS",
                    rate: 5
                },
                {
                    name: "JAVA SCRIPT",
                    rate: 5
                },
                {
                    name: "VUE.JS",
                    rate: 5
                },
                {
                    name: "REACT.JS",
                    rate: 2
                },
                {
                    name: "NPM",
                    rate: 3
                },
                {
                    name: "GIT",
                    rate: 5
                },
                {
                    name: "NODE.JS",
                    rate: 3
                },
                {
                    name: "FIGMA",
                    rate: 3
                },
                {
                    name: "PHOTOSHOP",
                    rate: 4
                },
                {
                    name: "LIGHTROOM",
                    rate: 5
                },
                {
                    name: "JIRA",
                    rate: 3
                },
            ],

            educations: {
                title: 'EDUCATION',
                details: `<b>IT SCHOOL</b> <br/> 
                    <i>Frondend Development </i>  <br/> 
                    HTML5, CSS 3, JavaScript, Sass, Node.js, GIT, 
                    Vue.JS, ReacT.JS, Jira. <br/> <br/> 
               
                   <b>University Politehnica of Bucharest</b> <br/> 
                   <i>Engineering and Management </i> <br/> 
                   HTML, Jira, WordPress, Marvel<br/> <br/> 
                   
                   <b>National College “Vlaicu Voda”</b> <br/> 
                   <i>Mathematics - computer science intensive </i> <br/> 
                    C++, HTML`
            },

            current_projects: {
                title: 'PROJECTS',
                details: `<b>MY RESUME</b> <br/> https://github.com/dnscrst/my-resume<br/><br/>
                        <b>UTILITY PROJECT</b> <br/> https://github.com/dnscrst/utility-project<br/><br/>
                        <b>NATOURS PROJECT</b> <br/> https://github.com/dnscrst/natours-webpage<br/><br/>
                        <b>SERVICE CRM</b> <br/> https://github.com/dnscrst/service-crm`

            }
        },

    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
