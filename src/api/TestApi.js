const courses = [
    {
        id: 1,
        name: "C-Pointers",
        title: "Play With Pointers in C",
        template:"https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptatem fugiat corporis voluptatum, dolorem temporibus, assumenda modi, iure nisi mollitia architecto dolores esse consequuntur! Quae eaque, reprehenderit voluptatibus sit laudantium vitae voluptate provident quasi soluta labore quam rem ad qui ullam similique reiciendis? Molestias aspernatur quae aliquid culpa cupiditate repudiandae tenetur autem, blanditiis modi, voluptate excepturi! Ducimus quis impedit beatae doloribus magnam architecto libero fugit, suscipit eum quae dignissimos dolorem dicta delectus laboriosam adipisci accusantium officiis tempora deserunt nemo. A, ad distinctio dolorem sequi voluptas officia! Quasi ullam provident illum perspiciatis, sint aliquid minus enim laudantium praesentium vel neque possimus itaque omnis numquam rem deleniti magnam dicta dolor officiis molestiae expedita nemo ratione. Minima delectus minus, reiciendis quidem autem nulla eum tenetur reprehenderit animi alias exercitationem magni, similique ipsam, est provident quibusdam? Quia mollitia molestias debitis quam ipsam, laborum odio iste accusamus enim excepturi maiores, aut obcaecati unde, dolores tenetur deserunt consequatur ipsum et. Perspiciatis velit tempore, animi consequatur possimus accusamus, iste a sed molestias, numquam inventore? Distinctio aliquam qui facilis dolor voluptates doloribus maxime ullam illum sapiente porro fuga harum quia dolores iure voluptatem vitae blanditiis at, ab excepturi deleniti animi dignissimos expedita perspiciatis esse? Ducimus neque ratione cupiditate aliquam! Odio labore suscipit nemo pariatur non, eligendi blanditiis autem dignissimos accusantium. Minus, reprehenderit voluptatem? Itaque consectetur dolorem voluptatibus tempore corrupti accusantium, exercitationem consequuntur ab vitae quidem odio repudiandae debitis perspiciatis natus hic laudantium adipisci libero et nulla sapiente. Inventore, doloremque perferendis amet, quod harum ut culpa adipisci mollitia eligendi in nobis magni exercitationem non obcaecati ipsam dolor quo voluptate? Harum accusamus rerum commodi nemo voluptas error ut obcaecati fugiat quis eveniet voluptatibus laboriosam, ea reiciendis quas at deleniti, eos quod itaque velit adipisci sint corporis, perspiciatis excepturi repellat! Sed aliquid vel reiciendis qui error quaerat excepturi illo ducimus hic.",
        prices: {
            "IN": {"mrp": 200, "symbol": "₹"},
            "IT": {"mrp": 300, "symbol": "€"},
            "USA": {"mrp": 3999, "symbol": "$"},
            "UK": {"mrp": 9939, "symbol": "£"},
            "JP": {"mrp": 3934, "symbol": "¥"},
            "CN": {"mrp": 30999, "symbol": "¥"},
            "FR": {"mrp": 939, "symbol": "€"},
            "DE": {"mrp": 88, "symbol": "€"},
            "AU": {"mrp": 9080, "symbol": "$"},
            "CA": {"mrp": 88900, "symbol": "$"},
            "BR": {"mrp": 89023, "symbol": "R$"},
            "RU": {"mrp": 88833, "symbol": "₽"},
            "MX": {"mrp": 9876, "symbol": "$"},
            "ZA": {"mrp": 83938, "symbol": "R"},
            "NZ": {"mrp": 7777, "symbol": "$"},
            "KR": {"mrp": 999999, "symbol": "₩"},
            "ES": {"mrp": 332, "symbol": "€"},
            "TW": {"mrp": 34, "symbol": "NT$"},
            "ID": {"mrp": 3432, "symbol": "Rp"},
        },
        default_price: {mrp: 2000, symbol: "$"},
        demo_video: "https://www.youtube.com/embed/dszQJe9XY8U?list=PLFt5JBAXXlQrOAsrvVzSulKgDGIJ5xpcX",
        time_laps: {
            "-": "Introduction",
            "1:30": "what is C?",
            "5:08": "What are pointers?",
            "10:33": "Problem Practice",
            "13:45": "What is Call by value?",
            "18:38": "What is Call by reference?",
            "23:02": "Assignment Explanation"
        },
        category: "Pointers",
        language: "English",
        stack: "C",
    },
    {
        id: 2,
        name: "Java-Basics",
        title: "Introduction to Java Programming",
        template:"https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptatem fugiat corporis voluptatum, dolorem temporibus, assumenda modi, iure nisi mollitia architecto dolores esse consequuntur! Quae eaque, reprehenderit voluptatibus sit laudantium vitae voluptate provident quasi soluta labore quam rem ad qui ullam similique reiciendis? Molestias aspernatur quae aliquid culpa cupiditate repudiandae tenetur autem, blanditiis modi, voluptate excepturi! Ducimus quis impedit beatae doloribus magnam architecto libero fugit, suscipit eum quae dignissimos dolorem dicta delectus laboriosam adipisci accusantium officiis tempora deserunt nemo. A, ad distinctio dolorem sequi voluptas officia! Quasi ullam provident illum perspiciatis, sint aliquid minus enim laudantium praesentium vel neque possimus itaque omnis numquam rem deleniti magnam dicta dolor officiis molestiae expedita nemo ratione. Minima delectus minus, reiciendis quidem autem nulla eum tenetur reprehenderit animi alias exercitationem magni, similique ipsam, est provident quibusdam? Quia mollitia molestias debitis quam ipsam, laborum odio iste accusamus enim excepturi maiores, aut obcaecati unde, dolores tenetur deserunt consequatur ipsum et. Perspiciatis velit tempore, animi consequatur possimus accusamus, iste a sed molestias, numquam inventore? Distinctio aliquam qui facilis dolor voluptates doloribus maxime ullam illum sapiente porro fuga harum quia dolores iure voluptatem vitae blanditiis at, ab excepturi deleniti animi dignissimos expedita perspiciatis esse? Ducimus neque ratione cupiditate aliquam! Odio labore suscipit nemo pariatur non, eligendi blanditiis autem dignissimos accusantium. Minus, reprehenderit voluptatem? Itaque consectetur dolorem voluptatibus tempore corrupti accusantium, exercitationem consequuntur ab vitae quidem odio repudiandae debitis perspiciatis natus hic laudantium adipisci libero et nulla sapiente. Inventore, doloremque perferendis amet, quod harum ut culpa adipisci mollitia eligendi in nobis magni exercitationem non obcaecati ipsam dolor quo voluptate? Harum accusamus rerum commodi nemo voluptas error ut obcaecati fugiat quis eveniet voluptatibus laboriosam, ea reiciendis quas at deleniti, eos quod itaque velit adipisci sint corporis, perspiciatis excepturi repellat! Sed aliquid vel reiciendis qui error quaerat excepturi illo ducimus hic.",
        prices: {
            "IN": {"mrp": 250, "symbol": "₹"},
            "IT": {"mrp": 350, "symbol": "€"},
            "USA": {"mrp": 4999, "symbol": "$"},
            "UK": {"mrp": 8999, "symbol": "£"},
            "JP": {"mrp": 4999, "symbol": "¥"},
            "CN": {"mrp": 39999, "symbol": "¥"},
            "FR": {"mrp": 599, "symbol": "€"},
            "DE": {"mrp": 77, "symbol": "€"},
            "AU": {"mrp": 7080, "symbol": "$"},
            "CA": {"mrp": 80900, "symbol": "$"},
            "BR": {"mrp": 79023, "symbol": "R$"},
            "RU": {"mrp": 78833, "symbol": "₽"},
            "MX": {"mrp": 8876, "symbol": "$"},
            "ZA": {"mrp": 73938, "symbol": "R"},
            "NZ": {"mrp": 777, "symbol": "$"},
            "KR": {"mrp": 959999, "symbol": "₩"},
            "ES": {"mrp": 332, "symbol": "€"},
            "TW": {"mrp": 36, "symbol": "NT$"},
            "ID": {"mrp": 4432, "symbol": "Rp"},
        },
        default_price: {mrp: 1800, symbol: "₹"},
        demo_video: "https://www.youtube.com/embed/dszQJe9XY8U?list=PLFt5JBAXXlQrOAsrvVzSulKgDGIJ5xpcX",
        time_laps: {
            "-": "Introduction",
            "1:30": "What is Java?",
            "5:08": "Syntax Basics",
            "10:33": "Object-Oriented Concepts",
            "13:45": "Data Types",
            "18:38": "Control Flow",
            "23:02": "Methods and Functions"
        },
        category: "Java",
        language: "English",
        stack: "Java",
    },
    {
        id: 3,
        name: "Python Fundamentals",
        title: "Learn Python Programming from Scratch",
        template:"https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptatem fugiat corporis voluptatum, dolorem temporibus, assumenda modi, iure nisi mollitia architecto dolores esse consequuntur! Quae eaque, reprehenderit voluptatibus sit laudantium vitae voluptate provident quasi soluta labore quam rem ad qui ullam similique reiciendis? Molestias aspernatur quae aliquid culpa cupiditate repudiandae tenetur autem, blanditiis modi, voluptate excepturi! Ducimus quis impedit beatae doloribus magnam architecto libero fugit, suscipit eum quae dignissimos dolorem dicta delectus laboriosam adipisci accusantium officiis tempora deserunt nemo. A, ad distinctio dolorem sequi voluptas officia! Quasi ullam provident illum perspiciatis, sint aliquid minus enim laudantium praesentium vel neque possimus itaque omnis numquam rem deleniti magnam dicta dolor officiis molestiae expedita nemo ratione. Minima delectus minus, reiciendis quidem autem nulla eum tenetur reprehenderit animi alias exercitationem magni, similique ipsam, est provident quibusdam? Quia mollitia molestias debitis quam ipsam, laborum odio iste accusamus enim excepturi maiores, aut obcaecati unde, dolores tenetur deserunt consequatur ipsum et. Perspiciatis velit tempore, animi consequatur possimus accusamus, iste a sed molestias, numquam inventore? Distinctio aliquam qui facilis dolor voluptates doloribus maxime ullam illum sapiente porro fuga harum quia dolores iure voluptatem vitae blanditiis at, ab excepturi deleniti animi dignissimos expedita perspiciatis esse? Ducimus neque ratione cupiditate aliquam! Odio labore suscipit nemo pariatur non, eligendi blanditiis autem dignissimos accusantium. Minus, reprehenderit voluptatem? Itaque consectetur dolorem voluptatibus tempore corrupti accusantium, exercitationem consequuntur ab vitae quidem odio repudiandae debitis perspiciatis natus hic laudantium adipisci libero et nulla sapiente. Inventore, doloremque perferendis amet, quod harum ut culpa adipisci mollitia eligendi in nobis magni exercitationem non obcaecati ipsam dolor quo voluptate? Harum accusamus rerum commodi nemo voluptas error ut obcaecati fugiat quis eveniet voluptatibus laboriosam, ea reiciendis quas at deleniti, eos quod itaque velit adipisci sint corporis, perspiciatis excepturi repellat! Sed aliquid vel reiciendis qui error quaerat excepturi illo ducimus hic.",
        prices: {
            "IN": {"mrp": 150, "symbol": "₹"},
            "IT": {"mrp": 250, "symbol": "€"},
            "USA": {"mrp": 2999, "symbol": "$"},
            "UK": {"mrp": 6899, "symbol": "£"},
            "JP": {"mrp": 2699, "symbol": "¥"},
            "CN": {"mrp": 20999, "symbol": "¥"},
            "FR": {"mrp": 689, "symbol": "€"},
            "DE": {"mrp": 55, "symbol": "€"},
            "AU": {"mrp": 5080, "symbol": "$"},
            "CA": {"mrp": 66900, "symbol": "$"},
            "BR": {"mrp": 69023, "symbol": "R$"},
            "RU": {"mrp": 65833, "symbol": "₽"},
            "MX": {"mrp": 7876, "symbol": "$"},
            "ZA": {"mrp": 53938, "symbol": "R"},
            "NZ": {"mrp": 5777, "symbol": "$"},
            "KR": {"mrp": 799999, "symbol": "₩"},
            "ES": {"mrp": 232, "symbol": "€"},
            "TW": {"mrp": 24, "symbol": "NT$"},
            "ID": {"mrp": 2432, "symbol": "Rp"},
        },
        default_price: {mrp: 1200, symbol: "₹"},
        demo_video: "https://www.youtube.com/embed/dszQJe9XY8U?list=PLFt5JBAXXlQrOAsrvVzSulKgDGIJ5xpcX",
        time_laps: {
            "-": "Introduction",
            "1:30": "Why Python?",
            "5:08": "Syntax Basics",
            "10:33": "Data Structures",
            "13:45": "Functions and Modules",
            "18:38": "Error Handling",
            "23:02": "File Handling"
        },
        category: "Python",
        language: "English",
        stack: "Python",
    },
    {
        id: 4,
        name: "Web Development",
        title: "The Complete Web Developer Course",
        template:"https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptatem fugiat corporis voluptatum, dolorem temporibus, assumenda modi, iure nisi mollitia architecto dolores esse consequuntur! Quae eaque, reprehenderit voluptatibus sit laudantium vitae voluptate provident quasi soluta labore quam rem ad qui ullam similique reiciendis? Molestias aspernatur quae aliquid culpa cupiditate repudiandae tenetur autem, blanditiis modi, voluptate excepturi! Ducimus quis impedit beatae doloribus magnam architecto libero fugit, suscipit eum quae dignissimos dolorem dicta delectus laboriosam adipisci accusantium officiis tempora deserunt nemo. A, ad distinctio dolorem sequi voluptas officia! Quasi ullam provident illum perspiciatis, sint aliquid minus enim laudantium praesentium vel neque possimus itaque omnis numquam rem deleniti magnam dicta dolor officiis molestiae expedita nemo ratione. Minima delectus minus, reiciendis quidem autem nulla eum tenetur reprehenderit animi alias exercitationem magni, similique ipsam, est provident quibusdam? Quia mollitia molestias debitis quam ipsam, laborum odio iste accusamus enim excepturi maiores, aut obcaecati unde, dolores tenetur deserunt consequatur ipsum et. Perspiciatis velit tempore, animi consequatur possimus accusamus, iste a sed molestias, numquam inventore? Distinctio aliquam qui facilis dolor voluptates doloribus maxime ullam illum sapiente porro fuga harum quia dolores iure voluptatem vitae blanditiis at, ab excepturi deleniti animi dignissimos expedita perspiciatis esse? Ducimus neque ratione cupiditate aliquam! Odio labore suscipit nemo pariatur non, eligendi blanditiis autem dignissimos accusantium. Minus, reprehenderit voluptatem? Itaque consectetur dolorem voluptatibus tempore corrupti accusantium, exercitationem consequuntur ab vitae quidem odio repudiandae debitis perspiciatis natus hic laudantium adipisci libero et nulla sapiente. Inventore, doloremque perferendis amet, quod harum ut culpa adipisci mollitia eligendi in nobis magni exercitationem non obcaecati ipsam dolor quo voluptate? Harum accusamus rerum commodi nemo voluptas error ut obcaecati fugiat quis eveniet voluptatibus laboriosam, ea reiciendis quas at deleniti, eos quod itaque velit adipisci sint corporis, perspiciatis excepturi repellat! Sed aliquid vel reiciendis qui error quaerat excepturi illo ducimus hic.",
        prices: {
            "IN": {"mrp": 300, "symbol": "₹"},
            "IT": {"mrp": 400, "symbol": "€"},
            "USA": {"mrp": 4999, "symbol": "$"},
            "UK": {"mrp": 8499, "symbol": "£"},
            "JP": {"mrp": 4299, "symbol": "¥"},
            "CN": {"mrp": 35999, "symbol": "¥"},
            "FR": {"mrp": 799, "symbol": "€"},
            "DE": {"mrp": 99, "symbol": "€"},
            "AU": {"mrp": 7080, "symbol": "$"},
            "CA": {"mrp": 83900, "symbol": "$"},
            "BR": {"mrp": 79023, "symbol": "R$"},
            "RU": {"mrp": 79833, "symbol": "₽"},
            "MX": {"mrp": 9876, "symbol": "$"},
            "ZA": {"mrp": 83938, "symbol": "R"},
            "NZ": {"mrp": 7777, "symbol": "$"},
            "KR": {"mrp": 959999, "symbol": "₩"},
            "ES": {"mrp": 332, "symbol": "€"},
            "TW": {"mrp": 36, "symbol": "NT$"},
            "ID": {"mrp": 4432, "symbol": "Rp"},
        },
        default_price: {mrp: 2500, symbol: "$"},
        demo_video: "https://www.youtube.com/embed/dszQJe9XY8U?list=PLFt5JBAXXlQrOAsrvVzSulKgDGIJ5xpcX",
        time_laps: {
            "-": "Introduction",
            "1:30": "HTML Basics",
            "5:08": "CSS Styling",
            "10:33": "JavaScript Fundamentals",
            "13:45": "Responsive Design",
            "18:38": "Backend Development",
            "23:02": "Full Stack Development"
        },
        category: "Web Development",
        language: "English",
        stack: "HTML, CSS, JavaScript"
    },
    // Add more dummy data as needed
];


export default courses;
