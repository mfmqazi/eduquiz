// Define curriculum based on US standards (Common Core / NGSS)

const SUBJECTS_BY_GRADE = {
    // Elementary (K-5)
    elementary: {
        "Math": ["Arithmetic", "Number Sense", "Geometry Basics", "Fractions & Decimals", "Measurement & Data"],
        "Science": ["Life Science (Plants/Animals)", "Physical Science (Matter/Energy)", "Earth & Space", "Engineering Basics"],
        "English": ["Reading Comprehension", "Grammar & Usage", "Vocabulary", "Writing Structure", "Phonics/Spelling"],
        "Social Studies": ["Community & Citizenship", "Geography Basics", "American Symbols", "Early History"]
    },
    // Middle School (6-8)
    middle: {
        "Math": ["Pre-Algebra", "Algebra I Basics", "Geometry", "Statistics & Probability", "Ratios & Proportions"],
        "Science": ["Life Science", "Physical Science", "Earth & Space Science", "Scientific Method"],
        "English": ["Literature Analysis", "Composition", "Grammar Mechanics", "Vocabulary Development"],
        "Social Studies": ["World Geography", "Ancient Civilizations", "US History (Early)", "Civics Basics"]
    },
    // High School (9-12)
    high: {
        "Math": ["Algebra I", "Geometry", "Algebra II", "Pre-Calculus", "Statistics", "Trigonometry"],
        "Science": ["Biology", "Chemistry", "Physics", "Environmental Science", "Anatomy & Physiology"],
        "English": ["American Literature", "British Literature", "World Literature", "Rhetoric & Composition", "Creative Writing"],
        "Social Studies": ["World History", "US History", "US Government & Civics", "Economics", "Psychology", "Sociology"]
    },
    // Advanced Placement (AP) - Official Categories
    ap: {
        "AP Arts": ["AP Art History", "AP Music Theory", "AP 2-D Art and Design"],
        "AP English": ["AP English Language and Composition", "AP English Literature and Composition"],
        "AP History & Social Sciences": [
            "AP Comparative Government and Politics",
            "AP European History",
            "AP Human Geography",
            "AP Macroeconomics",
            "AP Microeconomics",
            "AP Psychology",
            "AP United States Government and Politics",
            "AP United States History",
            "AP World History: Modern"
        ],
        "AP Math & Computer Science": [
            "AP Calculus AB",
            "AP Calculus BC",
            "AP Computer Science A",
            "AP Computer Science Principles",
            "AP Precalculus",
            "AP Statistics"
        ],
        "AP Sciences": [
            "AP Biology",
            "AP Chemistry",
            "AP Environmental Science",
            "AP Physics 1: Algebra-Based",
            "AP Physics 2: Algebra-Based",
            "AP Physics C: Mechanics",
            "AP Physics C: Electricity and Magnetism"
        ],
        "AP World Languages & Cultures": [
            "AP Chinese Language and Culture",
            "AP French Language and Culture",
            "AP German Language and Culture",
            "AP Italian Language and Culture",
            "AP Japanese Language and Culture",
            "AP Latin",
            "AP Spanish Language and Culture",
            "AP Spanish Literature and Culture"
        ]
    }
};

// Helper to determine grade level category
const getGradeLevel = (gradeNum) => {
    if (gradeNum <= 5) return 'elementary';
    if (gradeNum <= 8) return 'middle';
    return 'high';
};

// Helper to generate structure for all grades
const generateCurriculum = () => {
    const data = {};

    // Generate Grades 1-12
    for (let i = 1; i <= 12; i++) {
        const grade = `Grade ${i}`;
        data[grade] = {};

        const level = getGradeLevel(i);
        const curriculum = SUBJECTS_BY_GRADE[level];

        Object.keys(curriculum).forEach(subject => {
            data[grade][subject] = {};
            curriculum[subject].forEach(topic => {
                data[grade][subject][topic] = [];
            });
        });
    }

    // Add AP Level
    data["AP"] = {};
    const apCurriculum = SUBJECTS_BY_GRADE.ap;
    Object.keys(apCurriculum).forEach(subject => {
        data["AP"][subject] = {};
        apCurriculum[subject].forEach(topic => {
            data["AP"][subject][topic] = [];
        });
    });

    return data;
};

export const quizData = generateCurriculum();
