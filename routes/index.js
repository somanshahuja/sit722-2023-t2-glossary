var express = require('express');
var router = express.Router();

const namesList = [
  {'id':'1', 'term' : 'DevOps', 'desc' : 'DevOps refers to a collection of methodologies that merge software development (Dev) with IT operations (Ops) to enhance cooperation and optimize the software delivery process.', 'ref' : 'Ebert, C., Gallardo, G., Hernantes, J. and Serrano, N., 2016. DevOps. Ieee Software, 33(3), pp.94-100.' },
  {'id':'2', 'term' : 'CI' , 'desc' : 'CI entails automatically integrating code modifications into a shared repository multiple times a day, enabling teams to promptly identify and address integration challenges.', 'ref' : '  Humble, Jez; Farley, David (2011). Continuous Delivery: reliable software releases through build, test, and deployment automation. Pearson Education Inc. ISBN 978-0-321-60191-9.'},
  {'id':'3', 'term' : 'CD' , 'desc' : 'CD involves the automated deployment of code changes to production or staging environments following successful CI, resulting in a more efficient and dependable software delivery process.', 'ref' : 'Chen, L., 2018, April. Microservices: architecting for continuous delivery and DevOps. In 2018 IEEE International conference on software architecture (ICSA) (pp. 39-397). IEEE.'},
  {'id':'4', 'term' : 'VCS' , 'desc' : 'A VCS is a system that traces alterations to source code and facilitates collaboration among developers. Git and Subversion are among the commonly used examples.', 'ref' : 'Zhu, L., Bass, L. and Champlin-Scharff, G., 2016. DevOps and its practices. IEEE software, 33(3), pp.32-34.  '},
  {'id':'5', 'term' : 'Build Automation' , 'desc' : 'Build Automation is the process of automating the compilation and packaging of code into executable artifacts, simplifying application deployment and testing.', 'ref' : 'Callanan, M. and Spillane, A., 2016. DevOps: making it easy to do the right thing. Ieee Software, 33(3), pp.53-59.'},
  {'id':'6', 'term' : 'IAC' , 'desc' : 'IaC treats infrastructure components such as servers and networks like code, allowing versioning, automation, and more efficient management.', 'ref' : 'Rahman, A., 2018, May. Characteristics of defective infrastructure as code scripts in DevOps. In Proceedings of the 40th International Conference on Software Engineering: Companion Proceeedings (pp. 476-479).'},
  {'id':'7', 'term' : 'Containerization' , 'desc' : 'Containerization involves bundling applications and their dependencies into isolated containers, ensuring portability and consistency across various environments.', 'ref' : 'Shah, J., Dubaria, D. and Widhalm, J., 2018, November. A Survey of DevOps tools for Networking. In 2018 9th IEEE Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON) (pp. 185-188). IEEE.'},
  {'id':'8', 'term' : 'Docker' , 'desc' : 'Docker is a well-known platform for containerization, enabling developers to build, ship, and execute applications within containers.', 'ref' : 'Henkel, J., Bird, C., Lahiri, S.K. and Reps, T., 2020, June. Learning from, understanding, and supporting devops artifacts for docker. In Proceedings of the ACM/IEEE 42nd international conference on software engineering (pp. 38-49).'},
  {'id':'9', 'term' : 'Microservices' , 'desc' : 'Microservices refer to an architectural style where applications are divided into smaller, independent services that can be developed, deployed, and scaled autonomously.', 'ref' : ' Chen, Lianping; Ali Babar, Muhammad (2014). "2014 IEEE/IFIP Conference on Software Architecture". The 11th Working IEEE/IFIP Conference on Software Architecture(WICSA 2014). IEEE. pp. 195–204. doi:10.1109/WICSA.2014.45. ISBN 978-1-4799-3412-6.'},
  {'id':'10', 'term' : 'Deployment Pipeline' , 'desc' : 'A Deployment Pipeline is a series of automated stages through which code changes progress, from development to production, incorporating building, testing, and deployment steps.', 'ref' : 'Bass, L., 2017. The software architect and DevOps. IEEE Software, 35(1), pp.8-10.'},

  
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sit722', sub:'DevOps' , names: namesList});
});

module.exports = router;
