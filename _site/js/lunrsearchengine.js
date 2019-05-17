
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/CVL_Community/404.html",
    "title": "404",
    "body": "404 Page does not exist!: Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/CVL_Community/about",
    "title": "About the Characterisation Virtual Laboratory Community",
    "body": "   The Characterisation Virtual Laboratory Community  The Characterisation Virtual Laboratory (CVL) community is a group of researchers, university lecturers, and health professionals who engage in developing and maintaining materials for training and practice and encourage best data practices, including the use of the CVL infrastructure.   This website collects tutorials, slides, and exercises developed and  maintained by the Characterisation Virtual Laboratory community.   The Characterisation Virtual Laboratory:     The Characterisation Virtual Laboratory is a free cloud-based virtual desktop workbench to perform   analysis of complex image and microscopy data. It serves to run analyses   in a large computing infrastructure, all embedded in a web browser   accessible using AAF (Australian Access Federation), and connected to a   HPC (high performance computing) infrastructure.   For more information please visit https://cvl. org. au.   CVL Software Tools:   The available tools on the Characterisation Virtual Laboratory are listed under Software and versions documentation.   Virtual Laboratories, like the CVL, can save researchers time as they do not have to create and   maintain their own online environments and software tools.   Virtual Desktop:   Currently the virtual desktop service is provided as a national resource by MASSIVE Multi-Modal Australian Sciences Imaging and Visualisation Environment.    A new deployment of the CVL in Queensland provided by QRISCloud is currently being tested and will become available in next months. Read more about the RCC deployment of the CVL here.   Sign in to CVL:   You can create accounts to use the CVL either in the MASSIVE infrastructure as a national resource, or test the CVL at QRISCloud following these instructions.    Storage:   CVL supports extensions of MyTardis data management platform to support instrument facility data, HPC storage and external storage.   Contact for General enquiries:   Email: MASSIVE helpdesk.        Thank you for your support!    Funding:    The CVL is funded by ARDC and supported by MASSIVE in partnership with Monash University, Microscopy Australia, ANSTO, NIF, and the universities of Sydney, Queensland, Western Australia and Wollongong. As a national resource we welcome users of other institutions who will benefit from using the CVL.    "
    }, {
    "id": 2,
    "url": "http://localhost:4000/CVL_Community/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/CVL_Community/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Global sprint                               :               The Mozilla(moz://a) sprint idea is a month-long open opportunity for projects and communities to collaborate, hack, and learn together anytime during the month of May. . . . :                                                                                                                                                                       Paula Andrea Martinez                                17 May 2019                                                                                                                                                                                                                                                                                                                                    CVL Champions Program 2019                              :               The Characterisation Virtual Laboratory (CVL) Champions are a community of researchers, university lecturers, and bioimaging professionals taking part in a skills development program. The program. . . :                                                                                                                                                                       Paula Andrea Martinez                                04 May 2019                                                                                                                                  All resources:                                                                                                     Global sprint               :       The Mozilla(moz://a) sprint idea is a month-long open opportunity for projects and communities to collaborate, hack, and learn together anytime during the month of May. Global Sprint The Mozilla(moz://a) sprint. . . :                                                                               Paula Andrea Martinez                17 May 2019                                                                                                                                    Sign up to CVL at QRISCloud              :       The University of Queensland’s Research Computing Centre (RCC) is building the Characterisation Virtual Laboratory (CVL) desktop to enable UQ researchers to keep data nearby and leverage a local system for. . . :                                                                               Paula Andrea Martinez                12 May 2019                                                                                                                                    Sign up to CVL at MASSIVE              :       Characterisation Virtual Laboratory (CVL) desktop service is provided as a national resource by MASSIVE (Multi-Modal Australian Sciences Imaging and Visualisation Environment). MASSIVE provides researchers with the computing resources and tools. . . :                                                                               Paula Andrea Martinez                12 May 2019                                                                                            Australian Characterisation Facilities              :       Characterisation refers to the general process of probing and measuring the structures and properties of materials at the micro, nano and atomic scales. The Australian Characterisation Facilities “Characterisation refers to. . . :                                                                               Paula Andrea Martinez                04 May 2019                                                                                                                                    CVL Champions Program 2019              :       The Characterisation Virtual Laboratory (CVL) Champions are a community of researchers, university lecturers, and bioimaging professionals taking part in a skills development program. The program is to enhance the national. . . :                                                                               Paula Andrea Martinez                04 May 2019                                            "
    }, {
    "id": 4,
    "url": "http://localhost:4000/CVL_Community/js/lunrsearchengine.js",
    "title": "",
    "body": "{% assign counter = 0 %}var documents = [{% for page in site. pages %}{% if page. url contains ‘. xml’ or page. url contains ‘assets’ or page. url contains ‘category’ or page. url contains ‘tag’ %}{% else %}{  “id”: {{ counter }},  “url”: “{{ site. url }}{{site. baseurl}}{{ page. url }}”,  “title”: “{{ page. title }}”,  “body”: “{{ page. content | markdownify | replace: ‘. ’, ‘. ‘ | replace: ‘&lt;/h2&gt;’, ‘: ‘ | replace: ‘&lt;/h3&gt;’, ‘: ‘ | replace: ‘&lt;/h4&gt;’, ‘: ‘ | replace: ‘&lt;/p&gt;’, ‘ ‘ | strip_html | strip_newlines | replace: ‘ ‘, ‘ ‘ | replace: ‘”’, ‘ ‘ }}”{% assign counter = counter | plus: 1 %}  }, {% endif %}{% endfor %}{% for page in site. without-plugin %}{  “id”: {{ counter }},  “url”: “{{ site. url }}{{site. baseurl}}{{ page. url }}”,  “title”: “{{ page. title }}”,  “body”: “{{ page. content | markdownify | replace: ‘. ’, ‘. ‘ | replace: ‘&lt;/h2&gt;’, ‘: ‘ | replace: ‘&lt;/h3&gt;’, ‘: ‘ | replace: ‘&lt;/h4&gt;’, ‘: ‘ | replace: ‘&lt;/p&gt;’, ‘ ‘ | strip_html | strip_newlines | replace: ‘ ‘, ‘ ‘ | replace: ‘”’, ‘ ‘ }}”{% assign counter = counter | plus: 1 %}  }, {% endfor %}{% for page in site. posts %}{  “id”: {{ counter }},  “url”: “{{ site. url }}{{site. baseurl}}{{ page. url }}”,  “title”: “{{ page. title }}”,  “body”: “{{ page. date | date: “%Y/%m/%d” }} - {{ page. content | markdownify | replace: ‘. ’, ‘. ‘ | replace: ‘&lt;/h2&gt;’, ‘: ‘ | replace: ‘&lt;/h3&gt;’, ‘: ‘ | replace: ‘&lt;/h4&gt;’, ‘: ‘ | replace: ‘&lt;/p&gt;’, ‘ ‘ | strip_html | strip_newlines | replace: ‘ ‘, ‘ ‘ | replace: ‘”’, ‘ ‘ }}”{% assign counter = counter | plus: 1 %}  }{% if forloop. last %}{% else %}, {% endif %}{% endfor %}]; var idx = lunr(function () {  this. ref(‘id’)  this. field(‘title’)  this. field(‘body’) 123456789101112131415161718192021222324documents. forEach(function (doc) {  this. add(doc)}, this) }); function lunr_search(term) {document. getElementById('lunrsearchresults'). innerHTML = '&lt;ul&gt;&lt;/ul&gt;';if(term) {  document. getElementById('lunrsearchresults'). innerHTML =  &lt;p&gt;Search results for '  + term +  '&lt;/p&gt;  + document. getElementById('lunrsearchresults'). innerHTML;  //put results on the screen.   var results = idx. search(term);  if(results. length&gt;0){    //console. log(idx. search(term));    //if results    for (var i = 0; i &lt; results. length; i++) {      // more statements      var ref = results[i]['ref'];      var url = documents[ref]['url'];      var title = documents[ref]['title'];      var body = documents[ref]['body']. substring(0,160)+'. . . ';      document. querySelectorAll('#lunrsearchresults ul')[0]. innerHTML = document. querySelectorAll('#lunrsearchresults ul')[0]. innerHTML +  &lt;li class='lunrsearchresult'&gt;&lt;a href='  + url +  '&gt;&lt;span class='title'&gt;  + title +  &lt;/span&gt;&lt;br /&gt;&lt;span class='body'&gt; + body + &lt;/span&gt;&lt;br /&gt;&lt;span class='url'&gt; + url + &lt;/span&gt;&lt;/a&gt;&lt;/li&gt; ;    }  } else {    document. querySelectorAll('#lunrsearchresults ul')[0]. innerHTML =  &lt;li class='lunrsearchresult'&gt;No results found. . . &lt;/li&gt; ;  }}return false; }function lunr_search(term) {  $(‘#lunrsearchresults’). show( 400 );  $( “body” ). addClass( “modal-open” ); 123456789101112131415161718192021document. getElementById('lunrsearchresults'). innerHTML = '&lt;div id= resultsmodal  class= modal fade show d-block  tabindex= -1  role= dialog  aria-labelledby= resultsmodal &gt; &lt;div class= modal-dialog shadow-lg  role= document &gt; &lt;div class= modal-content &gt; &lt;div class= modal-header  id= modtit &gt; &lt;button type= button  class= close  id= btnx  data-dismiss= modal  aria-label= Close &gt; &amp;times; &lt;/button&gt; &lt;/div&gt; &lt;div class= modal-body &gt; &lt;ul class= mb-0 &gt; &lt;/ul&gt;  &lt;/div&gt; &lt;div class= modal-footer &gt;&lt;button id= btnx  type= button  class= btn btn-danger btn-sm  data-dismiss= modal &gt;Close&lt;/button&gt;&lt;/div&gt;&lt;/div&gt; &lt;/div&gt;&lt;/div&gt;';if(term) {  document. getElementById('modtit'). innerHTML =  &lt;h5 class='modal-title'&gt;Search results for '  + term +  '&lt;/h5&gt;  + document. getElementById('modtit'). innerHTML;  //put results on the screen.   var results = idx. search(term);  if(results. length&gt;0){    //console. log(idx. search(term));    //if results    for (var i = 0; i &lt; results. length; i++) {      // more statements      var ref = results[i]['ref'];      var url = documents[ref]['url'];      var title = documents[ref]['title'];      var body = documents[ref]['body']. substring(0,160)+'. . . ';      document. querySelectorAll('#lunrsearchresults ul')[0]. innerHTML = document. querySelectorAll('#lunrsearchresults ul')[0]. innerHTML +  &lt;li class='lunrsearchresult'&gt;&lt;a href='  + url +  '&gt;&lt;span class='title'&gt;  + title +  &lt;/span&gt;&lt;br /&gt;&lt;small&gt;&lt;span class='body'&gt; + body + &lt;/span&gt;&lt;br /&gt;&lt;span class='url'&gt; + url + &lt;/span&gt;&lt;/small&gt;&lt;/a&gt;&lt;/li&gt; ;    }  } else {    document. querySelectorAll('#lunrsearchresults ul')[0]. innerHTML =  &lt;li class='lunrsearchresult'&gt;Sorry, no results found. Close &amp; try a different search!&lt;/li&gt; ;  }}return false; }$(function() {  $(“#lunrsearchresults”). on(‘click’, ‘#btnx’, function () {    $(‘#lunrsearchresults’). hide( 5 );    $( “body” ). removeClass( “modal-open” );  });}); "
    }, {
    "id": 5,
    "url": "http://localhost:4000/CVL_Community/css/main.css",
    "title": "",
    "body": "/* We need to add display:inline in order to align the ‘»’ of the ‘read more’ link */. post-excerpt p {	display:inline;} // Import partials from sass_dir (defaults to _sass)@import	“syntax”,  “starsnonscss”; "
    }, {
    "id": 6,
    "url": "http://localhost:4000/CVL_Community/images/",
    "title": "",
    "body": "Source of Imageshttps://free-images. com marked as Public Domain or CC0 and is free to use "
    }, {
    "id": 7,
    "url": "http://localhost:4000/CVL_Community/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 8,
    "url": "http://localhost:4000/CVL_Community/10FAIRthings-progress/",
    "title": "Global sprint ",
    "body": "2019/05/17 - The Mozilla(moz://a) sprint idea is a month-long open opportunity for projects and communities to collaborate, hack, and learn together anytime during the month of May. Global SprintThe Mozilla(moz://a) sprint idea is a month-long open opportunity for projects and communities to collaborate, hack, and learn together anytime during the month of May. Mozilla-Library Carpentry Global Sprint, May 2019: The sprint has the aim to improve and develop Library Carpentry material. Under that umbrella we will work on the Top 10 FAIR Data &amp; Software Things. These are a number of brief guides created to help discipline-based communities understand the FAIR Principles. Register your interest on this etherpad https://pad. carpentries. org/2019-lc-mozsprint. Who is organising ?:  Mozilla Library Carpentry /The Carpentries The Australian Research Data Commons (ARDC) German National Library of Medicine (ZB MED) Many people are already involved. You are welcome to take part, either join a local hub, or work remotely. 10 FAIR things for ImagingDuring May, but specially 30-31 May, 2019 we will be working on the Top 10 FAIR things for imaging. Here is our work in progress document. We welcome contributions from diverse viewpoints and skill sets. If you contribute to this document make sure your name and details are known to us. This document is licensed under Creative Commons International Attribution license CC by 4. 0. Join the local Hub: We have booked a local hub. Room 501, level 5, building 2 (Duhig Tower),University of Queensland, Campbell Rd, St Lucia, 4067 QLD. We will start at 9:00 am AEST on the 30th of May, and work on standard office hours (9-5), both days. Join remotely: If you are reading this information before the day. Please contact me for an intro session. On the days, please join the Gitter/Chat Room: https://gitter. im/LibraryCarpentry/Lobby. Get in contact, and collaborate in the document. Contact: You can email Paula for any questions. The simple most meaningful step you can take to collaborate is tweet (Why? Because it takes a community to nurture resources that a community wants to use and reuse). Here is a tweet example, you can add any of the links above. “The @LibCarpentry @ARDC_AU #mozsprint #lc2019 is coming back end of May (30-31). I will be working on #Top10FAIR for #imaging https://pad. carpentries. org/2019-lc-mozsprint. ” "
    }, {
    "id": 9,
    "url": "http://localhost:4000/CVL_Community/CVL-QRISCloud-get_account/",
    "title": "Sign up to CVL at QRISCloud",
    "body": "2019/05/12 - The University of Queensland’s Research Computing Centre (RCC)is building the Characterisation Virtual Laboratory (CVL)desktop to enable UQ researchers to keep data nearby andleverage a local system for imaging workloads. Getting started with CVL at QRISCloudThe process to get an account to use the CVL at QRISCloudrequires a few steps, starting with gaining access tocomputing resources. Keep in mind the CVL at QRISCloud desktopis currently in testing mode.  Register for a QRIScloud Account using your institution Australia Access Federation (AAF) credentials.  Register to use the Awoonga cluster to get access to the CVL at Awoonga.  Join the CVL project. Please include a meaningful description in the form.  Go to strudel web and select uqcvl-auth.      If asked, please login with your institutional credentials through AAF.    Click on Awoonga-SpecialQ, then Launch   A desktop will start with state checked, click Show Desktop.    For general inquires about the CVL at QRISCloud, pleasecontact CVL at QRISCloud helpdesk. Read more about the CVL at QRISCloud: A new deployment of the CVL in Queensland provided byQRISCloud is currently being tested and will become availablein the next months. You can read more about this deployment here. Last updated on May 14, 2019. "
    }, {
    "id": 10,
    "url": "http://localhost:4000/CVL_Community/CVL-MASSIVE-get-account/",
    "title": "Sign up to CVL at MASSIVE",
    "body": "2019/05/12 - Characterisation Virtual Laboratory (CVL) desktop service isprovided as a national resource by MASSIVE (Multi-Modal Australian Sciences Imaging and Visualisation Environment). MASSIVEprovides researchers with the computing resources and tools toapply high-throughput parallel processing and deep learningtechniques to solve research questions, and allows researchersto more effectively extract knowledge from scientific data. Getting started with CVL at MASSIVEThe process to get an account to use the CVL at MASSIVErequires a few steps, starting with gaining access tocomputing resources. Keep in mind the CVL at MASSIVE desktopis currently the national resource and any Australianresearcher can apply for an account.  Log in to HPCID using your institution Australia Access Federation (AAF) credentials.  Password reset, click [Change Linux Password].  Create or join an existing project     If you are a principal investigator or a project manager please send a project request to MASSIVE by filling the following form. You will get a response in about 3 working days.    If you are a student or research assistant you need your supervisor or manager to get a project first and then give you the project code to join.     Go to strudel web (or strudel desktop) and select M3 and CVL @ MASSIVE.      If asked, please login with your institutional credentials through AAF.    Click on M3 standard Desktop, then Launch   A desktop will start with state checked, click Show Desktop.    For general inquires about the CVL at MASSIVE, please contact MASSIVE helpdesk. If you need more information and/or screenshots please visit the CVL documentation CVL accounts. What is MASSIVE?: (Multi-Modal Australian Sciences Imaging and Visualisation Environment)’s impact toscience is broad, and includes basic discoveries in thebiological, medical, computational, engineering andenvironmental sciences.  Last updated on May 14, 2019. "
    }, {
    "id": 11,
    "url": "http://localhost:4000/CVL_Community/AustralianCharacterisationFacilities/",
    "title": "Australian Characterisation Facilities",
    "body": "2019/05/04 - Characterisation refers to the general process of probing and measuring the structures and properties of materials at the micro, nano and atomic scales. The Australian Characterisation Facilities “Characterisation refers to the general process of probing and measuring the structures and properties of materials at the micro, nano and atomic scales. It is essential across natural, agricultural, physical, life and biomedical sciences and engineering. Characterisation facilities, provide researchers in Australian universities, research centres, and industries with critical infrastructure, including both instrumentation and expertise, to enable quality research outcomes in an efficient and cost-effective manner. These facilities are a key capability that underpin flagship Australian research collaborations including ARC Centres of Excellence which are both significant users and partners in the development of future characterisation techniques and applications. The Australian Characterisation community and our partners bring together thousands of researchers who are driving the future of Australian imaging and innovation”. Read more about the Collaborative Australian Characterisation Informatics Strategy here. *The Characterisation Virtual Laboratory (CVL) is operated by MASSIVE in partnership with Monash University, Microscopy Australia, ANSTO, NIF, University of Sydney, University of Queensland, University of Western Australia, and University of Wollongong. National Image Facility - NIF: Neuroscientists, imaging researchers and clinicians, platform engineers, and computational scientists. NIF nodes are 10 Universities plus ANSTO. New South Wales  University of Sydney / Brain &amp; Mind Research Institute + ANSTO University of New South Wales / The Biological Resource Imaging Laboratory (BRIL) / Imaging at Neuroscience Research Australia (NeuRA) Western Sydney University The University of Queensland / Centre for Advanced ImagingSouth Australia  Large Animal Research &amp; Imaging FacilityVictoria  Florey Institute of Neuroscience &amp; Mental Health Monash University Swinburne University of Technology University of Melbourne / The Melbourne Brain Centre Imaging UnitWestern Australia  University of Western AustraliaANSTO:  Opal Multipurpose Reactor Australian Centre for Neutron Scattering (ACNS) The Australian Synchrotron Centre for Accelerator Sciences National Deuteration Facility National Research Cyclotron (partly NIF)Microscopy Australia: (used to be Australian Microscopy &amp; Microanalysis Research Facility (ammrf)) @GoInnerSpace  University of Sydney / University of Queensland / Centre for Microscopy and Microanalysis (CMM) University of Western Australia / Centre for Microscopy, Characterisation and Analysis (CMCA) Australian National University / Centre for Advanced Microscopy University of New South Wales / Electron Microscopy Unit SARF University of Adelaide  University of South Australia  Flinders UniversityOthers facilities:  Queensland Micro- and Nanotechnology Centre CSIRO Advanced Characterisation Facility Australian National Fabrication Facility (ANFF) / Characterisation Service National Geosequestration Laboratory (NGL)Last updated 17 May 2019. "
    }, {
    "id": 12,
    "url": "http://localhost:4000/CVL_Community/champions/",
    "title": "CVL Champions Program 2019",
    "body": "2019/05/04 - The Characterisation Virtual Laboratory (CVL) Champions are a community of researchers, university lecturers, and bioimaging professionals taking part in a skills development program. The program is to enhance the national characterisation computing infrastructure and apply FAIR FAIR (Findable, Accessible, Interoperable, Reusable) data principles to research workflows, by upskilling scientists and bioimaging professionals for continuation of these goals. The Characterisation Virtual Laboratory is a free cloud-based virtual desktop to perform analysis of complex image and microscopy data. It is essentially a virtual computer with all the software you need pre-installed, all embedded in a web browser accessible using AAF (Australian Access Federation), and connected to a HPC (high performance computing) infrastructure. Read more about the CVL. 1234**TL;DR** / Summary :1. Get all costs paid to participate in a train the trainer event. 2. Form a community of engagement and maintenance of training resources. 3. Commit to deliver workshops next year, at least one of these should be using the CVL. CVL Champions Program 2019The CVL Champions Program’s aim is to create a community that stimulates network engagement across Australian characterisation facilities to raise the awareness of FAIR data principles and access to the national characterisation computing infrastructure. The CVL Champions is part of the Characterisation Data enhanced Virtual Laboratory (CDeVL) project, funded by the Australian Research Data Commons (ARDC). Why be a CVL champion?:  Becoming a CVL champion provides access to networking, advanced skills development, and demonstrates service to the profession.  The program provides the Champions with all the ready-to-use materials and knowledge required so that they can confidently re-deliver similar workshops from the Program in their own institutions.  The CVL champions are a community exemplar working together remotely and in person during two months (September/October 2019), so the time commitment is balanced.  Community members who are already involved in training can, and are encouraged to take part in the Program to improve their current teaching methodology and to further extend their network.  The program offers a two day in person meeting, with all costs paid. ApplicationWe are looking for a representative cohort of enthusiastic people, who are keen to learn and be the leaders of the national Characterisation training network. Champions are the engine across the Australian Characterisation community to uplift data skills and specialist skills across characterisation experts and users. Women applicants are specially encouraged to apply. The group of selected champions will meet in person for two days of networking and training on 1-2 October 2019, location TBA. Application timeline:  Applications open on 18 June 2019.  Videoconference information session on 17 July 2019.  Applications close on 31 July 2019.  Selected applicants will be contacted on 9 August 2019. Requirements:  Commit to attending and participating in the three programmed events, 2 online and 1 in person (see program below).  Commit to continuation of the training effort for at least until the end of 2020.  Provide at least 2 trainings sessions a year, one of which has to be part of the CVL trainings.  Promote the Characterisation Virtual Laboratory and best data management practices. * All participants will get access to the CVL infrastructure. CVL Champions agenda Remote meeting 1 (teleconference), 9 September 2019. To get to know the Champions we will allocate this time for each participant to present who they are, what they do, and their community.  Remote meeting 2 (teleconference), 23 September 2019. Champions will prepare SMART goals around the future uptake of FAIR data principles in their work activities.  In-person meeting (location TBA), 1-2 October 2019.      General introduction covering the data life cycle, the FAIR principles and a definition of data stewardship.    Evidence-based teaching practices.    Introduction to the CVL Desktop.    Stories and case studies of CVL users.    Get started preparing open access materials for the Characterisation community.     After the in person event, CVL Champions will have time to plan training activities for the coming months. CVL Champions are encouraged to self-coordinate, with the support of the Characterisation Training Coordinator.  CVL Champions are in charge of keeping all members updated about training activities, maintenance of training materials, and encouragement of best data practices for the broader community. Got questions?Please contact the Characterisation Training Coordinator. Special thanks for comments received before the publication of this post to, Noni Creasey, Ben Sinclair, Saba Salehi, and Shannon Lindsay. Last updated on 17 May 2019. "
    }, {
    "id": 13,
    "url": "http://localhost:4000/CVL_Community/Data-Management/",
    "title": "Data Management",
    "body": "2019/03/22 - Recommended data management readings. Research Data Management A brief illustration of the Path to a successful research project, how to get on the right track with FAIR data management.  Recommended reading 10 HASS Data things Thing 3: Data Management planningon page 9. It includes activities and useful material about How do you make a Data Management Plan?References:  10 HASS Data things Thing 3: Data Management planning by Sara King, Nov 2018. Accessed on 20th March, 2019.  Ten simple rules for machine-actionable data management plans (preprint) by Tomasz Miksa, Stephanie Simms, Daniel Mietchen and Sarah Jones. Published on 13th Feb, 2018. Accessed on 20th March, 2019 DOI:10. 5281/zenodo. 1434938 Path to a successful research project illustration. DeiC / Deff / DTU / CBS / AAU / KU Rigsarkivet / Det Kgl Bibliotek. 2018"
    }, {
    "id": 14,
    "url": "http://localhost:4000/CVL_Community/other-tutorials/",
    "title": "Publicly accessible software tutorials",
    "body": "2019/01/01 - A list of publicly accessible tutorials with a short description. We will appreciate if you can curate and/or add to this list. Tutorials from external resourcesList of all tutorials ordered by Alphabet name: The Image Data Resource:  The Image Data Resource (IDR) publishes “reference image” datasets supporting conventional peer-reviewed publications and integrates them with other imaging datasets for cross-dataset querying of metadata (e. g. genes, phenotypes, small molecules) and re-analysis. Submission of datasets to IDR and an IDR metadata example. computational Bioimaging: From images (both light and electron microscopy) to data. This course willcover the process of dealing with microscopy data, converting between formats,analysing images in a clear and reproducible fashion and preparing images forpublication. Includes FIJI, Python and OMERO. By Matthew Hartley 2015, from JohnInnes Centre, JIC. Online tutorial. Labeled for beginners in microscopy analysis. FreeSurfer:  If you want to learn FreeSurfer the documentation is ready to be explored. FIJI:  OMERO + FIJI From GBI Sydney, Sep 2018. FIJI analysis starts on page 10. Author: Petr Walczysko part of Hands-on data management with OMERO.  ImageJ tutorials.  ImageJ tutorials using Jupyter notebooks This project contains example code for working with ImageJ and SciJava. CC0 1. 0 Universal license.  Using ImageJ CC0 1. 0 Universal license.  Practical exercises to learn image analysis using ImageJ/Fiji with a strong focus on biological fluorescence microscopy data Author: Christian “Tischi” Tischer, 2018 and 2019. Suggested to look at folder handouts and practicals.  Fiji scripting tutorial using python (jython) by Albert Cardona ImageJ and FIJI by Peter Bankhead Getting started with the plugin TrackMate A very fast way to make tutorials in FIJI and upload them to the FIJI Wiki A brief introduction to machine learning for bio-imaging http://bit. do/ML-Imaging-WS Nick Hamilton, Sep 2018 and March 2019. Using FIJI with Trainable WekaGit: Git for Scientists by Miles McBain 2019. A 3. 5 hour introduction to basic shell and git/GitHub. Read and follow along the tutorial here. This work is licensed under aCreative Commons Attribution-Share Alike 4. 0 International License. MRtrix:  MRtrix documentationOMERO:  OMERO it redirects to https://code. research. uts. edu. au/MIF/OMERO-instructions/wikis/homeUpdated on May 15th, 2019 "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});