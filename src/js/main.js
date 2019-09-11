'use strict';

console.log(`Run 🏃‍♂️🏃‍♂️`);

const listOfProjects = document.querySelector('.cards-js');

fetch('https://api.github.com/users/rzonsol/repos?sort=updated&per_page=4')
	.then(resp => resp.json())
	.then(resp => {
		resp.forEach(element => {
			const { description, homepage, html_url, name } = element;

			const linkToDemoPage =
				homepage != null
					? `<a class="cards__item__footer__a" href="${homepage}" target="_blank" rel="nofollow noreferrer">
        Demo
      </a>
      `
					: '';

			listOfProjects.innerHTML += `<section class="cards__item">
							<div class="cards__item__container">
								<img
									src="../assets/img/github_Icon.svg"
									alt="Icons of GitHub"
								/>
								<h4 class="cards__item__title">${name}</h4>
								<p class="cards__item__description">${
									description != null ? description : 'No description.'
								}</p>
							</div>
							<footer class="cards__item__footer">
								${linkToDemoPage}
								<a
                  href="${html_url}"
                  target="_blank" 
                  rel="nofollow noreferrer"
									class="cards__item__footer__a cards__item__footer__a__code"
								>
									GitHub
								</a>
							</footer>
						</section>`;
		});
	})
	.catch(errors => {
		listOfProjects.innerHTML += 'No connection to github server.';
	});
