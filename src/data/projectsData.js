export const archiveData = {
    en: [
        {
            year: 2026,
            projects: [
                { id: 'project-1', title: 'Project 1' },
                { id: 'project-2', title: 'Project 2' },
            ]
        },
        {
            year: 2025,
            projects: [
                { id: 'project-3', title: 'Project 3' },
            ]
        },
        {
            year: 2024,
            projects: [
                { id: 'project-4', title: 'Project 4' },
            ]
        },
        {
            year: 2023,
            projects: [
                { id: 'project-5', title: 'Project 5' },
            ]
        },
        {
            year: 2022,
            projects: [
                { id: 'project-6', title: 'Project 6' },
            ]
        }
    ],
    vi: [
        {
            year: 2026,
            projects: [
                { id: 'project-1', title: 'Project 1' },
                { id: 'project-2', title: 'Project 2' },
            ]
        },
        {
            year: 2025,
            projects: [
                { id: 'project-3', title: 'Project 3' },
            ]
        },
        {
            year: 2024,
            projects: [
                { id: 'project-4', title: 'Project 4' },
            ]
        },
        {
            year: 2023,
            projects: [
                { id: 'project-5', title: 'Project 5' },
            ]
        },
        {
            year: 2022,
            projects: [
                { id: 'project-6', title: 'Project 6' },
            ]
        }
    ]
};

export const projectsData = {
    en: {
        'project-1': {
            title: "Project 1",
            role: "Game Developer",
            engine: "Unity",
            language: "C#",
            platform: "Android",
            teamSize: "1 Person",
            headerTitles: { role: "Role", lang: "Language", engine: "Engine", team: "Team Size", time: "Duration", repo: "Repo", playBtn: "▶ Play (WebGL)", dwnBtn: "↓ Download APK" },
            elevatorPitch: "Neon Cyber Drift is a cyberpunk-themed low-poly shooter racing game. Experience high-speed drifting while dodging enemy fire.",
            overviewData: { title: "1. Overview & Role", text: "A 6-month project developed by a 4-member team. My primary role was crafting the Vehicle Physics and managing Enemy AI." },
            mechanicData: { title: "2. Core Mechanics", intro: "Two core systems I am most proud of:" },
            mechanics: [
                { imagePlaceholder: "[ Boss Fight Image ]", label: "3-Phase Boss AI System." },
                { imagePlaceholder: "[ Inventory Image ]", label: "Component-based Upgrade System." }
            ],
            techData: { title: "3. Behind The Scene", text: "To optimize multiplayer vehicle sync, I utilized Client Prediction. Below is the internal interpolation code snippet:" },
            codeSnippet: `public void CalculateNetworkDrift() {\n    // Get current velocity\n    Vector3 pred = velocity * Time.deltaTime;\n    rb.MovePosition(pred);\n}`
        },
        'project-2': {
            title: "Project 2",
            role: "Solo Developer",
            engine: "Godot 4.0",
            language: "GDScript",
            platform: " PC, Web",
            teamSize: "1 Person",
            duration: "Jan 2024 - May 2024",
            repoUrl: "https://github.com",
            headerTitles: { role: "Role", lang: "Language", engine: "Engine", team: "Team Size", time: "Duration", repo: "Repo", playBtn: "▶ Play (WebGL)", dwnBtn: "↓ Download APK" },
            elevatorPitch: "A lean farming mechanics demo, including tile building, watering, harvesting, and a day/night cycle system.",
            overviewData: { title: "1. Overview", text: "I built this project from scratch to hone my Game Loop and Level Design skills in Godot." },
            mechanicData: { title: "2. Core Mechanics", intro: "Key systemic screens:" },
            mechanics: [
                { imagePlaceholder: "[ Tilemap Grid ]", label: "Auto-snapping 2D TileMap." },
                { imagePlaceholder: "[ Rain Effect ]", label: "Weather Particle Systems." }
            ],
            techData: { title: "3. Behind The Scene", text: "The biggest challenge was the screen color overlay changing by the hour. I solved it writing custom Shaders." },
            codeSnippet: `void fragment() {\n   // Mix colors with day/night lighting\n   COLOR = texture(TEXTURE, UV) * light_color;\n}`
        },
        'project-3': {
            title: "Window XP Portfolio UI",
            role: "Frontend Dev",
            engine: "ReactJS + Vite",
            language: "JavaScript (JSX)",
            platform: "Web",
            teamSize: "1 Person",
            duration: "Apr 2026",
            repoUrl: "https://github.com",
            headerTitles: { role: "Role", lang: "Language", engine: "Engine", team: "Team Size", time: "Duration", repo: "Repo", playBtn: "▶ Play (WebGL)", dwnBtn: "↓ Download APK" },
            elevatorPitch: "An extremely unique portfolio simulating a Windows XP OS integrated with Wikipedia styling.",
            overviewData: { title: "1. Overview", text: "Built the entire UI from scratch without generic templates. Focused on Window management and mock Router." },
            mechanicData: { title: "2. Features", intro: "Impressive UI capabilities:" },
            mechanics: [
                { imagePlaceholder: "[ Draggable Windows ]", label: "Smooth dragging controls." },
                { imagePlaceholder: "[ Wikipedia Routing ]", label: "Standalone Router div control." }
            ],
            techData: { title: "3. Behind The Scene", text: "Building this required deep manipulation of React Hooks (useState, useEffect) avoiding 3rd-party dragging libraries." },
            codeSnippet: `const handleDrag = (e) => {\n   if(isDragging) {\n        setPosition({ x: e.clientX, y: e.clientY });\n   }\n}`
        }
    },
    vi: {
        'project-1': {
            title: "Neon Cyber Drift",
            role: "Gameplay Programmer",
            engine: "Unity 2022.3 LTS",
            language: "C#",
            platform: "Web, Android, PC",
            teamSize: "4 Người",
            duration: "Feb 2025 - Aug 2025",
            repoUrl: "https://github.com",
            headerTitles: { role: "Vai Trò", lang: "Ngôn ngữ", engine: "Engine", team: "Team Size", time: "Thời gian", repo: "Repo", playBtn: "▶ Chơi (WebGL)", dwnBtn: "↓ Tải APK" },
            elevatorPitch: "Neon Cyber Drift là tựa game đua xe bắn súng trên nền Cyberpunk với đồ họa Low-poly. Người chơi sẽ trải nghiệm cảm giác drift tốc độ cao tránh hỏa lực địch.",
            overviewData: { title: "1. Bài toán và Vai Trò", text: "Dự án phát triển qua 6 tháng với team 4 người. Vai trò chính là Vật lý xe (Vehicle Physics) và xử lý AI của kẻ địch." },
            mechanicData: { title: "2. Tính Năng Cốt Lõi", intro: "Đây là 2 hệ thống cốt lõi tôi tự hào nhất:" },
            mechanics: [
                { imagePlaceholder: "[ Ảnh đánh Boss ]", label: "Hệ thống AI Đánh Boss 3 trạng thái." },
                { imagePlaceholder: "[ Hình ảnh Inventory ]", label: "Hệ nâng cấp xe Component-based." }
            ],
            techData: { title: "3. Triển Khai Kỹ Thuật", text: "Để tối ưu đồng bộ vị trí xe trong Multiplayer, tôi dùng Client Prediction. Dưới đây là phần code nội suy:" },
            codeSnippet: `public void CalculateNetworkDrift() {\n    // Lấy gia tốc hiện tại\n    Vector3 pred = velocity * Time.deltaTime;\n    rb.MovePosition(pred);\n}`
        },
        'project-2': {
            title: "Bản sao Stardew Valley",
            role: "Solo Developer",
            engine: "Godot 4.0",
            language: "GDScript",
            platform: "PC, Web",
            teamSize: "1 Người",
            duration: "Jan 2024 - May 2024",
            repoUrl: "https://github.com",
            headerTitles: { role: "Vai Trò", lang: "Ngôn ngữ", engine: "Engine", team: "Team Size", time: "Thời gian", repo: "Repo", playBtn: "▶ Chơi (WebGL)", dwnBtn: "↓ Tải APK" },
            elevatorPitch: "Bản demo hệ thống Nông trại tinh gọn: xây dựng ô đất, tưới cây, thu hoạch và chu kỳ ngày/đêm.",
            overviewData: { title: "1. Tổng quan", text: "Dự án tự build từ A-Z để nâng cao thế mạnh về hệ thống Game Loop và Level Design trong Godot." },
            mechanicData: { title: "2. Tính Năng Cốt Lõi", intro: "Các màn hình hệ thống tiêu biểu:" },
            mechanics: [
                { imagePlaceholder: "[ Lưới Tilemap ]", label: "TileMap 2D tự động bắt lưới." },
                { imagePlaceholder: "[ Hiệu ứng Mưa ]", label: "Particle Systems cho Thời tiết." }
            ],
            techData: { title: "3. Triển Khai Kỹ Thuật", text: "Thách thức lớn nhất là chuyển màu màn hình theo múi giờ. Tôi giải quyết bằng Shader." },
            codeSnippet: `void fragment() {\n   // Mix màu với ánh sáng ngày đêm\n   COLOR = texture(TEXTURE, UV) * light_color;\n}`
        },
        'project-3': {
            title: "Giao Diện Window XP",
            role: "Frontend Dev",
            engine: "ReactJS + Vite",
            language: "JavaScript (JSX)",
            platform: "Web",
            teamSize: "1 Người",
            duration: "Apr 2026",
            repoUrl: "https://github.com",
            headerTitles: { role: "Vai Trò", lang: "Ngôn ngữ", engine: "Engine", team: "Team Size", time: "Thời gian", repo: "Repo", playBtn: "▶ Mở Web", dwnBtn: "↓ Mã Nguồn" },
            elevatorPitch: "Portfolio siêu dị mô phỏng hệ điều hành Window XP tích hợp Wikipedia.",
            overviewData: { title: "1. Tổng quan", text: "Xây dựng hệ thống UI từ con số không, tập trung quản lý Window và Router giả lập." },
            mechanicData: { title: "2. Tính Năng Cốt Lõi", intro: "Những tính năng ấn tượng:" },
            mechanics: [
                { imagePlaceholder: "[ Draggable Windows ]", label: "Kéo thả cửa sổ mượt mà." },
                { imagePlaceholder: "[ Wikipedia Routing ]", label: "Router độc lập bên trong div." }
            ],
            techData: { title: "3. Triển Khai Kỹ Thuật", text: "Thao tác sâu vào Hooks (useState, useEffect) bỏ qua việc dùng 3rd-party library." },
            codeSnippet: `const handleDrag = (e) => {\n   if(isDragging) {\n        setPosition({ x: e.clientX, y: e.clientY });\n   }\n}`
        }
    }
};
