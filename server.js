const express = require('express');
const app = express();

const pastWorks = [
    {
        project_id: 101,
        name: "Orchard OS",
        description: "A revolutionary operating system designed for seamless integration across desktop and mobile devices, featuring AI-driven personal assistance.",
        completion_date: "2021-08-15"
    },
    {
        project_id: 102,
        name: "Golden Seed Cloud Storage",
        description: "Highly secure cloud storage service offering encrypted file storage and real-time collaboration tools for businesses.",
        completion_date: "2022-03-22"
    },
    {
        project_id: 103,
        name: "Branch Metrics Analytics",
        description: "Advanced analytics platform that uses machine learning to provide insights into user behavior and system performance.",
        completion_date: "2022-11-30"
    },
    {
        project_id: 104,
        name: "AppleCore IoT Solutions",
        description: "Internet of Things (IoT) solutions that allow devices to communicate efficiently, enhancing smart home and smart city applications.",
        completion_date: "2023-01-10"
    },
    {
        project_id: 105,
        name: "Cider Security Suite",
        description: "Comprehensive security suite providing end-to-end protection from cyber threats, including advanced threat detection and response systems.",
        completion_date: "2023-04-17"
    }
];

const staffList = [
    {
        staff_id: "BA001",
        name: "Alice Johnson",
        role: "Chief Executive Officer",
        department: "Executive"
    },
    {
        staff_id: "BA002",
        name: "Bob Smith",
        role: "Chief Technology Officer",
        department: "Technology"
    },
    {
        staff_id: "BA003",
        name: "Carol Lee",
        role: "Director of Engineering",
        department: "Engineering"
    },
    {
        staff_id: "BA004",
        name: "David Brown",
        role: "Product Manager",
        department: "Product"
    },
    {
        staff_id: "BA005",
        name: "Eva Green",
        role: "Head of Security",
        department: "Security"
    },
    {
        staff_id: "BA006",
        name: "Frank Knight",
        role: "Lead Data Scientist",
        department: "Data Science"
    },
    {
        staff_id: "BA007",
        name: "Grace Hopper",
        role: "Senior Software Engineer",
        department: "Software Development"
    },
    {
        staff_id: "BA008",
        name: "Henry Ford",
        role: "Marketing Director",
        department: "Marketing"
    },
    {
        staff_id: "BA009",
        name: "Irene Adler",
        role: "Chief Financial Officer",
        department: "Finance"
    },
    {
        staff_id: "BA010",
        name: "John Doe",
        role: "Human Resources Manager",
        department: "Human Resources"
    }
]



app.listen(3000, () => {
    console.log('I am working fine!');
});

app.get('/', (req, res) => {
    res.render('homepage.ejs');
});

app.get('/companyhistory', (req, res) => {
    res.render('companyhistory.ejs');
});

app.get('/pastwork', (req, res) => {
    res.render('pastwork.ejs', {
        pastworks: pastWorks
    });
});

app.get('/staff', (req, res) => {
    res.render('staff.ejs', {
        staff: staffList
    });
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs');
});

app.get('/links', (req, res) => {
    res.render('links.ejs');
});