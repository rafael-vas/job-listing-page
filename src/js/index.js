const data = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "src/images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": [],
      "stack": ["HTML", "CSS", "JavaScript"]
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "src/images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"],
      "stack": ["React", "Python"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "src/images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"],
      "stack": ["JavaScript", "React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "src/images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": [],
      "stack": ["CSS", "JavaScript"]
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "src/images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"],
      "stack": ["JavaScript", "Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "src/images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"],
      "stack": ["Ruby", "RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "src/images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"],
      "stack": ["HTML", "JavaScript", "Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "src/images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"],
      "stack": ["JavaScript", "Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "src/images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"],
      "stack": ["JavaScript", "Python", "Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "src/images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"],
      "stack": ["JavaScript", "React", "Sass"]
    },
    {
      "id": 11,
      "company": "Teste Company",
      "logo": "https://via.placeholder.com/80x80",
      "new": true,
      "featured": false,
      "position": "Teste Developer",
      "role": "Teste",
      "level": "Teste",
      "postedAt": "1sec ago",
      "contract": "Forever",
      "location": "Worldwide",
      "languages": [],
      "tools": [],
      "stack": ["Teste", "Teste", "JavaScript"]
    }
]

const main = document.querySelector(".main");

const containerJobs = document.createElement("div");
containerJobs.classList.add("jobs")
containerJobs.classList.add("container")
main.appendChild(containerJobs)

for (let i = 0; i <= data.length - 1; i++) {

    containerJobs.innerHTML += `
    <div class="job ${data[i].new === true ? 'featured' : '' }">
        <div class="info">
            <div class="logo">
            <img src="${data[i].logo}" alt="#">
            </div>
            <div class="content">
                <div class="company">
                    <h2>${data[i].company}</h2>
                    ${data[i].new === true ? '<span class="new">NEW!</span>' : ''}
                    ${data[i].featured === true ? '<span class="featured">FEATURED</span>' : ''}
                </div>
                <div class="role">
                    <h1>${data[i].position}</h1>
                </div>
                <div class="extra">
                    <p>${data[i].postedAt}</p>
                    <p>•</p>
                    <p>${data[i].contract}</p>
                    <p>•</p>
                    <p>${data[i].location}</p>
                </div>
            </div>
        </div>
        <ul class="skills">
            <li class="skill">${
                data[i].stack[0] ?
                data[i].stack[0] : ''
            }</li>
            <li class="skill">${
                data[i].stack[1] ?
                data[i].stack[1] : ''
            }</li>
            <li class="skill">${
                data[i].stack[2] ?
                data[i].stack[2] : ''
            }</li>
            <li class="skill">${
                data[i].stack[3] ?
                data[i].stack[3] : ''
            }</li>
            <li class="skill">${
                data[i].stack[4] ?
                data[i].stack[4] : ''
            }</li>
        </ul>
    </div>
    `
}

const containerFilter = document.querySelector(".filter");
const containerFilteredTags = document.querySelector(".filtered.tags");

const skills = document.querySelectorAll(".skills .skill");

skills.forEach( skill => {
    if (skill.textContent === '') {
        skill.remove();
    }

    skill.addEventListener("click", () => {

        if (containerFilter.classList.contains("hidden")) {
            containerFilter.classList.remove("hidden");
        }

        if (containerFilteredTags.children.length > 5) {
            return
        }

        const oldFilteredTagsNames = document.querySelectorAll(".filtered.tag .name");

        const oldFilteredTagsNamesArray = [];

        for (let i = 0; i <= oldFilteredTagsNames.length - 1; i++) {
            oldFilteredTagsNamesArray.push(oldFilteredTagsNames[i].textContent)
        }


        const filteredTag = document.createElement("li");
        filteredTag.classList.add("filtered");
        filteredTag.classList.add("tag");

        filteredTag.innerHTML = `
        <span class="name">${skill.textContent}</span>
        <span class="remove"></span>
        `

        containerFilteredTags.appendChild(filteredTag)


        const filteredTagsNames = document.querySelectorAll(".filtered.tag .name");


        const filteredTagsNamesArray = [];

        for (let i = 0; i <= filteredTagsNames.length - 1; i++) {
            filteredTagsNamesArray.push(filteredTagsNames[i].textContent)
        }

        if (oldFilteredTagsNamesArray.includes(skill.textContent)) {
            filteredTag.remove();
        }


        const cardJobs = document.querySelectorAll(".jobs.container .job");

        function filter(array) {

            for (let k = 0; k <= data.length - 1; k++) {


                if (array[0]) {
                    if (
                        data[k].stack.includes(array[0])
                    ) {
                        cardJobs[k].classList.remove("hidden");

                    } else {
                        cardJobs[k].classList.add("hidden");

                    }
                }

                if (array[1]) {
                    if (
                        (
                            data[k].stack.includes(array[0]) &&
                            data[k].stack.includes(array[1])
                        )
                    ) {
                        cardJobs[k].classList.remove("hidden");

                    } else {
                        cardJobs[k].classList.add("hidden");

                    }
                }

                if (array[2]) {
                    if (
                        (
                            data[k].stack.includes(array[0]) &&
                            data[k].stack.includes(array[1]) &&
                            data[k].stack.includes(array[2])
                        )
                    ) {
                        cardJobs[k].classList.remove("hidden");

                    } else {
                        cardJobs[k].classList.add("hidden");

                    }
                }

                if (array[3]) {
                    if (
                        (
                            data[k].stack.includes(array[0]) &&
                            data[k].stack.includes(array[1]) &&
                            data[k].stack.includes(array[2]) &&
                            data[k].stack.includes(array[3])
                        )
                    ) {
                        cardJobs[k].classList.remove("hidden");

                    } else {
                        cardJobs[k].classList.add("hidden");

                    }
                }

                if (array[4]) {
                    if (
                        (
                            data[k].stack.includes(array[0]) &&
                            data[k].stack.includes(array[1]) &&
                            data[k].stack.includes(array[2]) &&
                            data[k].stack.includes(array[3]) &&
                            data[k].stack.includes(array[4])
                        )
                    ) {
                        cardJobs[k].classList.remove("hidden");

                    } else {
                        cardJobs[k].classList.add("hidden");

                    }
                }

                if (array[5]) {
                    if (
                        (
                            data[k].stack.includes(array[0]) &&
                            data[k].stack.includes(array[1]) &&
                            data[k].stack.includes(array[2]) &&
                            data[k].stack.includes(array[3]) &&
                            data[k].stack.includes(array[4]) &&
                            data[k].stack.includes(array[5])
                        )
                    ) {
                        cardJobs[k].classList.remove("hidden");
                    } else {
                        cardJobs[k].classList.add("hidden");

                    }
                }

                if (array.length === 0) {
                    cardJobs[k].classList.remove("hidden");
                }

            }

         }

         filter(filteredTagsNamesArray);

        const filteredTags = document.querySelectorAll(".filtered.tag");
        const removeBtn = document.querySelectorAll(".filtered.tag .remove");

        for(let i = 0; i <= filteredTags.length - 1; i++) {
            removeBtn[i].addEventListener("click", () => {
                filteredTags[i].remove();

                const filteredTagsNames = document.querySelectorAll(".filtered.tag .name");


                const filteredTagsNamesArray = [];

                for (let i = 0; i <= filteredTagsNames.length - 1; i++) {
                    filteredTagsNamesArray.push(filteredTagsNames[i].textContent)
                }

                filter(filteredTagsNamesArray);
            })

        }


    })
})

const clearBtn = document.querySelector(".clear.btn");

clearBtn.addEventListener("click", () => {
    const filteredTags = document.querySelectorAll(".filtered.tag");
    filteredTags.forEach(filteredTag => filteredTag.remove())

    const cardJobs = document.querySelectorAll(".jobs.container .job");
    cardJobs.forEach(job => job.classList.remove("hidden"))
})