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
  {'id':'11', 'term' : 'Post Mortem' , 'desc' : 'A post-mortem (also known as a retrospective) is a meeting held after a significant event, such as a production outage, to analyze what went wrong, identify the root causes, and learn from the experience.', 'ref' : '"InfoWorld Oct 5, 1981". 5 October 1981. Archived from the original on September 18, 2019. Retrieved July 17, 2019.'},
  {'id':'12', 'term' : 'Agile' , 'desc' : 'Agile is an iterative and incremental approach to software development that emphasizes collaboration, customer feedback, and adaptive planning.', 'ref' : '"Principles behind the Agile Manifesto". agilemanifesto.org. Retrieved 2020-12-06.'},
  {'id':'13', 'term' : 'Infrastructure Automation' , 'desc' : 'Infrastructure Automation involves using tools and scripts to automate the provisioning, configuration, and management of infrastructure resources.', 'ref' : 'Morisio, Maurizio (16 April 2021). DevOps: development of a toolchain in the banking domain. Politecnico di Torino (laurea). Retrieved 16 August 2021.'},
  {'id':'14', 'term' : 'Devops Tool chain' , 'desc' : 'The DevOps toolchain refers to a set of tools that aid in various stages of the software development and delivery process, such as version control, CI/CD, testing, and monitoring.' , 'ref' : ' Seroter, Richard. "Exploring the ENTIRE DevOps Toolchain for (Cloud) Teams". infoq.com.'},
  {'id':'15', 'term' : 'Monitoring and Alerting' , 'desc' : 'Monitoring involves the collection of data from various systems and applications to assess their performance, while alerting notifies the appropriate teams when certain thresholds or issues are met.' ,  'ref' : 'Avoid Failure by Developing a Toolchain that Enables DevOps (Report). Gartner. 16 March 2016.'},
  {'id':'16', 'term' : 'Kubernetes' , 'desc' : 'Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.' ,  'ref' : '"Turnkey Cloud Solutions". Kubernetes Documentation. Retrieved July 25, 2023.'},
  {'id':'17', 'term' : 'Configuraion Management' , 'desc' : 'Configuration Management is the process of automating and managing the configuration of software and infrastructure, ensuring consistency and reproducibility across different environments.' ,  'ref' : '"MIL-HDBK-61A, ""Military Handbook: Configuration Management Guidance". Department of Defense. 7 February 2001. Archived from the original on 20 March 2012. Retrieved 24 March 2012.'},
  {'id':'18', 'term' : 'GitLab' , 'desc' : 'GitLab is a web-based Git repository manager that provides a complete DevOps platform, including version control, CI/CD pipelines, and project management features.' ,  'ref' : '"GitLab goes public on Nasdaq a $10 billion IPO". CNBC. October 14, 2021.'},
  {'id':'19', 'term' : 'Jankins' , 'desc' : 'Jenkins is an open-source automation server that supports building, testing, and deploying applications. It is widely used for implementing Continuous Integration and Continuous Deployment pipelines.' ,  'ref' : 'Jenkins 1.396 released Archived 2018-12-08 at the Wayback Machine, The first release of Jenkins is posted, Kohsuke Kawaguchi'},
  {'id':'20', 'term' : 'IaaS' , 'desc' : 'IaaS is a cloud computing model that provides virtualized computing resources over the internet. It allows users to rent virtual machines, storage, and networking infrastructure on a pay-as-you-go basis.' ,  'ref' : ' "What is IaaS?". www.redhat.com. Retrieved 2022-10-21.'},
  {'id':'21', 'term' : 'Alerting' , 'desc' : 'Setting up notifications and alerts to proactively identify and address issues in applications and systems.' ,  'ref' : 'Yarlagadda, R.T., 2021. DevOps and its practices. International Journal of Creative Research Thoughts (IJCRT), ISSN, pp.2320-2882.'},
  {'id':'22', 'term' : 'DevSecOps' , 'desc' : 'Integrating security practices into the DevOps workflow to ensure that security is an integral part of the software development and deployment process.' ,  'ref' : ' Wilson, Glenn (December 2020). "DevSecOps: A leader guide to producing secure software with compromising flow, feedback and continuous improvement". Rethink Press. ISBN 978-1781335024.'},
  {'id':'23', 'term' : 'Collaboration Tools' , 'desc' : 'Software tools and platforms that facilitate communication and collaboration among development and operations teams.' ,  'ref' : ' Lomas, Cyprien; Burke, Michael; Page, Carie L. (2008). Collaboration Tools (PDF). EDUCAUSE Learning Initiative. Archived from the original (PDF) on 2015-08-07. Retrieved 2015-11-04.'},
  {'id':'24', 'term' : 'Infrastructure Monitoring' , 'desc' : 'Monitoring the health and performance of servers, networks, and other infrastructure components to ensure stability.' ,  'ref' : 'https://www.datadoghq.com/knowledge-center/infrastructure-monitoring/'},
  {'id':'25', 'term' : 'Pipeline as Code' , 'desc' : 'Defining and managing deployment pipelines using code, enabling versioning, automation, and consistent practices.' ,  'ref' : 'https://about.gitlab.com/topics/ci-cd/pipeline-as-code/'},
  {'id':'26', 'term' : 'Release Management' , 'desc' : 'Planning, scheduling, and coordinating the deployment of software releases, ensuring smooth delivery to end-users.' ,  'ref' : 'https://www.plutora.com/software-release-management/what-is-release-management'},
  {'id':'27', 'term' : 'artifact repository' , 'desc' : 'A centralized location for storing and managing software artifacts such as compiled binaries, libraries, and packages.' ,  'ref' : 'https://jfrog.com/devops-tools/article/what-is-an-artifact-repository/'},
  {'id':'28', 'term' : 'Versioning' , 'desc' : 'Assigning unique identifiers to different versions of code, configurations, or resources to enable tracking and rollback.' ,  'ref' : 'https://en.wikipedia.org/wiki/Versioning'},
  {'id':'29', 'term' : 'Scalability' , 'desc' : 'The ability of a system to handle increased load by adding resources or modifying the architecture, ensuring optimal performance.' ,  'ref' : 'Hill, Mark D. (1990). "What is scalability?". ACM SIGARCH Computer Architecture News. 18 (4): 18. doi:10.1145/121973.121975. S2CID 1232925.'},
  {'id':'30', 'term' : 'Incident Management' , 'desc' : 'The process of identifying, responding to, and resolving incidents that disrupt the normal operation of systems and applications.' ,  'ref' : 'https://www.atlassian.com/incident-management'},
 
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sit722', sub:'DevOps' , names: namesList});
});

module.exports = router;
