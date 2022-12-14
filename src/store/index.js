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
                details: ` - C++ for school projects (2013-2017)<br/>
                - WordPress and HTML school and personal projects (2017-2021)<br/>
                - Frontend Developer Intern at SuperDev (2021-2022)<br/>
                - Vue JS for personal projects (since 2020)`
            },

            soft_skills: {
                title: 'SOFT SKILLS',
                details: `Teamwork <br/>
                Self-confidence <br/>
                Self discipline<br/>
                Punctuality <br/>
                Perseverance<br/>
                Ambition<br/>
                Overthinking<br/>
                Fast learning`
            },

            special_skills: {
                title: 'SPECIAL SKILLS',
                details: `SEO and digital marketing knowledge <br/>
                 Leadership and project management
                `
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
                details: `IT SCHOOL <br/> 
                    Frondend Development <br/> 
                    HTML5, CSS 3, JavaScript, Sass, Node.js, GIT, 
                    Vue.JS, ReacT.JS, Jira. <br/> <br/> 
               
                   University Politehnica of Bucharest<br/> 
                   Engineering and Management<br/> 
                   HTML, Jira, WordPress, Marvel<br/> <br/> 
                   
                   National College “Vlaicu Voda”<br/> 
                   Mathematics - computer science intensive<br/> 
                    C++, HTML`
            },

            current_projects: {
                title: 'PROJECTS',
                details: `My Resume - https://github.com/dnscrst/my-resume<br/><br/>
                        Utility Project - https://github.com/dnscrst/utility-project<br/><br/>
                        Natours Project - https://github.com/dnscrst/natours-webpage<br/><br/>
                        Service CRM - https://github.com/dnscrst/service-crm`

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
