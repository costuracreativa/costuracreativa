// Course Sewing Platform Application with Firebase Support

// ==========================================
// 0. CONFIGURACIÓN DE FIREBASE (NUBE)
// ==========================================
// Si deseas sincronizar la web en tiempo real entre múltiples ordenadores y móviles,
// completa los datos de tu proyecto de Firebase a continuación:
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDjc2nN7o9jFolIa-9Ps2Ay6uIbvBks_BI",
    authDomain: "paginacostura.firebaseapp.com",
    projectId: "paginacostura",
    storageBucket: "paginacostura.firebasestorage.app",
    messagingSenderId: "362886682393",
    appId: "1:362886682393:web:3165126db31fb097b2d788"
};

// ==========================================
// 1. DEFAULT DATA SEED (Datos Semilla por Defecto)
// ==========================================
const DEFAULT_COURSES = [
    {
        id: "simple",
        title: "Costura Simple",
        desc: "Aprende el enhebrado básico, puntadas elementales y cómo dominar tu máquina de coser desde cero.",
        tag: "Nivel Inicial",
        duration: "4 Horas",
        lessonsCount: 3,
        icon: "scissors"
    },
    {
        id: "corte",
        title: "Corte y Confección",
        desc: "Domina el arte de tomar medidas correctas, trazar patrones básicos y realizar cortes perfectos en tela.",
        tag: "Nivel Intermedio",
        duration: "8 Horas",
        lessonsCount: 3,
        icon: "ruler"
    },
    {
        id: "remeras",
        title: "Remeras y Tops",
        desc: "Aprende a trabajar con telas elásticas de punto, cuellos de ribb y acabados profesionales sin overlock.",
        tag: "Especialidades",
        duration: "5 Horas",
        lessonsCount: 2,
        icon: "shirt"
    },
    {
        id: "pantalones",
        title: "Pantalones y Calzas",
        desc: "Confección de pantalones a medida: bolsillos, braguetas con cierre, cinturas elásticas y pinzas de entalle.",
        tag: "Especialidades",
        duration: "6 Horas",
        lessonsCount: 2,
        icon: "pocket"
    },
    {
        id: "clasico",
        title: "Corte Clásico",
        desc: "Confección de prendas de sastrería clásica, sacos forrados, cuellos sastre y terminaciones finas a mano.",
        tag: "Avanzado",
        duration: "10 Horas",
        lessonsCount: 2,
        icon: "needle"
    }
];

const DEFAULT_CLASSES = [
    {
        id: "cls-s1",
        courseId: "simple",
        title: "Clase 1: Partes de la máquina y enhebrado",
        desc: "En esta clase te enseño en detalle cada parte de tu máquina de coser familiar, cómo colocar la aguja de forma correcta, devanar la bobina y realizar el enhebrado superior e inferior paso a paso.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: "cls-s2",
        courseId: "simple",
        title: "Clase 2: Regulación de tensión y puntadas básicas",
        desc: "Aprenderás a regular la tensión del hilo para evitar fruncidos. Practicaremos costura recta, zig-zag y cómo rematar correctamente al inicio y final de una costura.",
        videoUrl: "https://www.w3schools.com/html/movie.mp4"
    },
    {
        id: "cls-s3",
        courseId: "simple",
        title: "Clase 3: Práctica inicial - Almohadón con solapa",
        desc: "¡Tu primer proyecto! Aplicaremos lo aprendido confeccionando un almohadón simple sin cierres ni botones. Medición, corte de tela y armado completo paso a paso.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: "cls-c1",
        courseId: "corte",
        title: "Clase 1: Toma de medidas y tabla de talles",
        desc: "Aprende la manera correcta de medir contornos, largos y anchos en el cuerpo humano para evitar errores de talle. Diferencias entre moldería industrial y a medida.",
        videoUrl: "https://www.w3schools.com/html/movie.mp4"
    },
    {
        id: "cls-c2",
        courseId: "corte",
        title: "Clase 2: Trazo del molde base de falda",
        desc: "Dibujaremos juntas el molde base delantero y trasero de una falda clásica. Explicación del uso de escuadras, curvas y colocación de pinzas.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: "cls-c3",
        courseId: "corte",
        title: "Clase 3: Tizado y corte en tela",
        desc: "Cómo colocar los moldes sobre el hilo de la tela para que no se deforme la prenda. Margen de costura, uso de tiza sastre y tijeras adecuadas.",
        videoUrl: "https://www.w3schools.com/html/movie.mp4"
    },
    {
        id: "cls-r1",
        courseId: "remeras",
        title: "Clase 1: Molde base de remera y corte",
        desc: "Trazado del molde base de remera unisex y adaptaciones. Consideraciones especiales para cortar telas de punto con elasticidad.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: "cls-r2",
        courseId: "remeras",
        title: "Clase 2: Cuello redondo con ribb y manga clásica",
        desc: "Técnica infalible para pegar el cuello de ribb sin que quede desbocado u holgado. Colocación de mangas en plano y dobladillo con aguja doble.",
        videoUrl: "https://www.w3schools.com/html/movie.mp4"
    },
    {
        id: "cls-p1",
        courseId: "pantalones",
        title: "Clase 1: Moldería de pantalón base y tiro",
        desc: "Cálculo del tiro delantero y trasero. Trazado del molde de pantalón recto. Modificaciones para tiro alto o bajo.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: "cls-p2",
        courseId: "pantalones",
        title: "Clase 2: Armado de cintura con elástico",
        desc: "Montaje fácil del elástico en cintura para pantalones cómodos o calzas. Costura recta reforzada y pisado del elástico para evitar que se doble.",
        videoUrl: "https://www.w3schools.com/html/movie.mp4"
    },
    {
        id: "cls-cl1",
        courseId: "clasico",
        title: "Clase 1: Introducción a la sastrería clásica",
        desc: "Diferencias entre sastrería tradicional y confección común. Entretelas de sastre, picado a mano y modelado de solapas.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: "cls-cl2",
        courseId: "clasico",
        title: "Clase 2: Confección de ojal sastre a mano",
        desc: "Elaboración del clásico ojal sastre con hilo torzal. Trucos y práctica para lograr un acabado premium y duradero.",
        videoUrl: "https://www.w3schools.com/html/movie.mp4"
    }
];

const DEFAULT_USERS = [
    {
        id: "usr-admin",
        displayName: "Administrador Principal",
        username: "admin",
        password: "ProfesorAdmin#",
        isAdmin: true,
        allowedCourses: []
    },
    {
        id: "usr-maria",
        displayName: "María Belén",
        username: "maria",
        password: "maria123",
        isAdmin: false,
        allowedCourses: ["simple", "remeras"]
    },
    {
        id: "usr-juan",
        displayName: "Juan Carlos Gomez",
        username: "juan",
        password: "juan123",
        isAdmin: false,
        allowedCourses: ["corte", "pantalones"]
    }
];

// ==========================================
// 2. STATE MANAGER (Manejo de Base de Datos Híbrida)
// ==========================================
class AppState {
    constructor() {
        this.currentUser = null;
        this.currentView = "home";
        this.activeCourseId = null;
        this.activeClassId = null;
        this.editingUserId = null;
        
        // Cache en memoria
        this.courses = [];
        this.classes = [];
        this.users = [];

        // Conexión Firebase
        this.db = null;
        this.isFirebaseEnabled = false;
        
        this.initFirebase();
    }

    initFirebase() {
        if (typeof firebase !== "undefined" && FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey !== "TU_API_KEY") {
            try {
                firebase.initializeApp(FIREBASE_CONFIG);
                this.db = firebase.firestore();
                this.isFirebaseEnabled = true;
                console.log("🔥 Firebase Firestore inicializado con éxito.");
            } catch (e) {
                console.error("❌ Error al inicializar Firebase:", e);
            }
        } else {
            console.log("💾 Ejecutando en Modo Local (LocalStorage).");
        }
    }

    // Carga los datos asíncronamente al iniciar la web
    async loadData() {
        if (this.isFirebaseEnabled) {
            try {
                // 1. Obtener Cursos
                let coursesSnap = await this.db.collection("courses").get();
                if (coursesSnap.empty) {
                    // Sembrar datos por primera vez en la nube
                    console.log("Sembrando cursos en Firestore...");
                    for (const c of DEFAULT_COURSES) {
                        await this.db.collection("courses").doc(c.id).set(c);
                    }
                    coursesSnap = await this.db.collection("courses").get();
                }
                this.courses = coursesSnap.docs.map(doc => doc.data());

                // 2. Obtener Clases
                let classesSnap = await this.db.collection("classes").get();
                if (classesSnap.empty) {
                    console.log("Sembrando clases en Firestore...");
                    for (const cl of DEFAULT_CLASSES) {
                        await this.db.collection("classes").doc(cl.id).set(cl);
                    }
                    classesSnap = await this.db.collection("classes").get();
                }
                this.classes = classesSnap.docs.map(doc => doc.data());

                // 3. Obtener Usuarios
                let usersSnap = await this.db.collection("users").get();
                if (usersSnap.empty) {
                    console.log("Sembrando usuarios en Firestore...");
                    for (const u of DEFAULT_USERS) {
                        await this.db.collection("users").doc(u.id).set(u);
                    }
                    usersSnap = await this.db.collection("users").get();
                }
                this.users = usersSnap.docs.map(doc => doc.data());

                console.log("Carga completa desde Firebase Firestore.");
            } catch (err) {
                console.error("Error cargando de Firebase, usando fallback local:", err);
                this.loadLocalStorage();
            }
        } else {
            this.loadLocalStorage();
        }
    }

    loadLocalStorage() {
        if (!localStorage.getItem("courses")) {
            localStorage.setItem("courses", JSON.stringify(DEFAULT_COURSES));
        }
        if (!localStorage.getItem("classes")) {
            localStorage.setItem("classes", JSON.stringify(DEFAULT_CLASSES));
        }
        if (!localStorage.getItem("users")) {
            localStorage.setItem("users", JSON.stringify(DEFAULT_USERS));
        }

        this.courses = JSON.parse(localStorage.getItem("courses"));
        this.classes = JSON.parse(localStorage.getItem("classes"));
        this.users = JSON.parse(localStorage.getItem("users"));
        console.log("Datos cargados desde LocalStorage.");
    }

    getCourses() {
        return this.courses;
    }

    getClasses() {
        return this.classes;
    }

    getUsers() {
        return this.users;
    }

    async saveUsers(newUsersList) {
        this.users = newUsersList;
        if (this.isFirebaseEnabled) {
            try {
                // Sincronizar todos en Firestore
                // Para mantener la lógica simple de re-emplazar la lista entera:
                // Primero eliminamos los usuarios no admins actuales (o actualizamos/creamos uno por uno en la lógica del formulario)
                // Usaremos sincronización uno por uno en las acciones para mayor eficiencia
            } catch (e) {
                console.error("Error al sincronizar usuarios con Firebase:", e);
            }
        }
        localStorage.setItem("users", JSON.stringify(newUsersList));
    }

    async saveUserSingle(user) {
        // Buscar y actualizar o insertar
        const idx = this.users.findIndex(u => u.id === user.id);
        if (idx !== -1) {
            this.users[idx] = user;
        } else {
            this.users.push(user);
        }
        
        if (this.isFirebaseEnabled) {
            await this.db.collection("users").doc(user.id).set(user);
        }
        localStorage.setItem("users", JSON.stringify(this.users));
    }

    async deleteUserSingle(userId) {
        this.users = this.users.filter(u => u.id !== userId);
        if (this.isFirebaseEnabled) {
            await this.db.collection("users").doc(userId).delete();
        }
        localStorage.setItem("users", JSON.stringify(this.users));
    }

    async saveClassSingle(newClass) {
        this.classes.push(newClass);
        if (this.isFirebaseEnabled) {
            await this.db.collection("classes").doc(newClass.id).set(newClass);
        }
        localStorage.setItem("classes", JSON.stringify(this.classes));
    }

    async deleteClassSingle(classId) {
        this.classes = this.classes.filter(c => c.id !== classId);
        if (this.isFirebaseEnabled) {
            await this.db.collection("classes").doc(classId).delete();
        }
        localStorage.setItem("classes", JSON.stringify(this.classes));
    }

    async updateCourseSingle(course) {
        const idx = this.courses.findIndex(c => c.id === course.id);
        if (idx !== -1) {
            this.courses[idx] = course;
            if (this.isFirebaseEnabled) {
                await this.db.collection("courses").doc(course.id).set(course);
            }
            localStorage.setItem("courses", JSON.stringify(this.courses));
        }
    }
}

const state = new AppState();

// ==========================================
// 3. UI HANDLERS & NAVIGATION
// ==========================================
document.addEventListener("DOMContentLoaded", async () => {
    // 1. Mostrar pantalla de carga o indicador mientras baja los datos de Firestore
    const publicGrid = document.getElementById("public-courses-grid");
    publicGrid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:3rem; color:var(--text-secondary);"><i data-lucide="loader" class="animate-spin" style="margin: 0 auto 1rem auto; width:30px; height:30px;"></i> Cargando la plataforma...</div>`;
    lucide.createIcons();

    // 2. Cargar base de datos (Local o Nube)
    await state.loadData();
    
    // 3. Inicializar componentes
    renderPublicCourses();
    setupEventListeners();
    refreshAdminChecklist();
    
    // 4. Verificar retorno de pago de Mercado Pago
    await checkPaymentReturn();
    
    // Check session
    const savedUser = sessionStorage.getItem("currentUser");
    if (savedUser) {
        const parsed = JSON.parse(savedUser);
        // Validar si el usuario aún existe en nuestra base de datos cargada
        const userExists = state.getUsers().find(u => u.username.toLowerCase() === parsed.username.toLowerCase() && u.password === parsed.password);
        if (userExists) {
            state.currentUser = userExists;
            updateNavbarState();
            if (state.currentUser.isAdmin) {
                switchView("admin");
            } else {
                switchView("portal");
            }
        } else {
            sessionStorage.removeItem("currentUser");
            switchView("home");
        }
    } else {
        switchView("home");
    }

    lucide.createIcons();
});

function switchView(viewName) {
    state.currentView = viewName;
    
    document.querySelectorAll(".app-view").forEach(view => {
        view.classList.remove("active");
    });
    
    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) {
        targetView.classList.add("active");
    }

    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("data-view") === viewName) {
            link.classList.add("active");
        }
    });

    document.getElementById("nav-menu").classList.remove("show");

    if (viewName === "portal") {
        renderStudentPortal();
    } else if (viewName === "admin") {
        renderAdminPanel();
    }

    window.scrollTo(0, 0);
}

function updateNavbarState() {
    const btnPortal = document.getElementById("btn-nav-portal");
    const btnAdmin = document.getElementById("btn-nav-admin");
    const btnLoginLogout = document.getElementById("btn-login-logout");
    const loginText = document.getElementById("login-text");
    const loginIcon = document.getElementById("login-icon");

    if (state.currentUser) {
        loginText.textContent = "Salir";
        loginIcon.setAttribute("data-lucide", "log-out");
        
        if (state.currentUser.isAdmin) {
            btnAdmin.style.display = "flex";
            btnPortal.style.display = "none";
        } else {
            btnAdmin.style.display = "none";
            btnPortal.style.display = "flex";
        }
    } else {
        loginText.textContent = "Ingresar";
        loginIcon.setAttribute("data-lucide", "log-in");
        btnAdmin.style.display = "none";
        btnPortal.style.display = "none";
    }
    
    lucide.createIcons();
}

// ==========================================
// 4. RENDERING FUNCTIONS
// ==========================================
function renderPublicCourses() {
    const grid = document.getElementById("public-courses-grid");
    const courses = state.getCourses();
    
    grid.innerHTML = courses.map(course => {
        let iconName = "scissors";
        if (course.id === "corte") iconName = "ruler";
        if (course.id === "remeras") iconName = "shirt";
        if (course.id === "pantalones") iconName = "pocket";
        if (course.id === "clasico") iconName = "award";

        return `
            <div class="course-card">
                <div class="course-img-placeholder">
                    <div class="course-icon-bg">
                        <i data-lucide="${iconName}"></i>
                    </div>
                </div>
                <div class="course-card-content">
                    <span class="course-tag">${course.tag}</span>
                    <h3>${course.title}</h3>
                    <p>${course.desc}</p>
                    <div class="course-meta" style="margin-bottom: 1.5rem;">
                        <div class="meta-item">
                            <i data-lucide="play-circle"></i>
                            <span>${course.lessonsCount} Lecciones</span>
                        </div>
                        <div class="meta-item">
                            <i data-lucide="clock"></i>
                            <span>${course.duration}</span>
                        </div>
                    </div>
                    <button class="btn-primary btn-full btn-buy-course" data-id="${course.id}" data-title="${course.title}">
                        Inscribirse <i data-lucide="shopping-bag"></i>
                    </button>
                </div>
            </div>
        `;
    }).join("");
    
    lucide.createIcons();
}

function renderStudentPortal() {
    const student = state.currentUser;
    if (!student) return;

    document.getElementById("student-name").textContent = student.displayName;

    const sidebarList = document.getElementById("student-courses-list");
    const courses = state.getCourses();
    
    const allowedCourses = courses.filter(c => student.allowedCourses.includes(c.id));

    if (allowedCourses.length === 0) {
        sidebarList.innerHTML = `<p style="font-size:0.85rem; color:var(--text-secondary); text-align:center; padding:1rem 0;">No tienes cursos asignados aún. Por favor contacta al administrador.</p>`;
        document.getElementById("portal-no-selection").style.display = "block";
        document.getElementById("portal-viewer").style.display = "none";
        return;
    }

    sidebarList.innerHTML = allowedCourses.map(course => {
        const isActive = state.activeCourseId === course.id ? "active" : "";
        return `
            <div class="student-course-item ${isActive}" data-id="${course.id}">
                <span>${course.title}</span>
                <i data-lucide="chevron-right"></i>
            </div>
        `;
    }).join("");

    lucide.createIcons();

    document.querySelectorAll(".student-course-item").forEach(item => {
        item.addEventListener("click", () => {
            const courseId = item.getAttribute("data-id");
            selectStudentCourse(courseId);
        });
    });

    if (state.activeCourseId) {
        const hasAccess = student.allowedCourses.includes(state.activeCourseId);
        if (hasAccess) {
            renderActiveCourseViewer();
        } else {
            state.activeCourseId = null;
            state.activeClassId = null;
            document.getElementById("portal-no-selection").style.display = "block";
            document.getElementById("portal-viewer").style.display = "none";
        }
    }
}

function selectStudentCourse(courseId) {
    state.activeCourseId = courseId;
    
    const classes = state.getClasses().filter(c => c.courseId === courseId);
    if (classes.length > 0) {
        state.activeClassId = classes[0].id;
    } else {
        state.activeClassId = null;
    }

    renderStudentPortal();
}

function renderActiveCourseViewer() {
    document.getElementById("portal-no-selection").style.display = "none";
    document.getElementById("portal-viewer").style.display = "block";

    const courses = state.getCourses();
    const course = courses.find(c => c.id === state.activeCourseId);
    const classes = state.getClasses().filter(c => c.courseId === state.activeCourseId);

    document.getElementById("active-course-title").textContent = course.title;
    document.getElementById("active-course-desc").textContent = course.desc;

    const playlistContainer = document.getElementById("playlist-items");
    if (classes.length === 0) {
        playlistContainer.innerHTML = `<div class="class-empty">Pronto subiremos las clases de este curso.</div>`;
        document.getElementById("video-frame-container").innerHTML = `<div class="portal-placeholder" style="border:none; padding:4rem;"><p>No hay clases disponibles en este momento.</p></div>`;
        document.getElementById("active-class-title").textContent = "Sin clases";
        document.getElementById("active-class-desc").textContent = "El administrador aún no ha cargado clases para este curso.";
        return;
    }

    playlistContainer.innerHTML = classes.map((cls, idx) => {
        const isActive = state.activeClassId === cls.id ? "active" : "";
        return `
            <div class="playlist-item ${isActive}" data-class-id="${cls.id}">
                <div class="playlist-item-num">${idx + 1}</div>
                <div class="playlist-item-title">${cls.title}</div>
                <i data-lucide="play" style="width:14px; height:14px;"></i>
            </div>
        `;
    }).join("");

    lucide.createIcons();

    document.querySelectorAll(".playlist-item").forEach(item => {
        item.addEventListener("click", () => {
            state.activeClassId = item.getAttribute("data-class-id");
            renderActiveCourseViewer();
        });
    });

    const activeClass = classes.find(c => c.id === state.activeClassId) || classes[0];
    if (activeClass) {
        document.getElementById("active-class-title").textContent = activeClass.title;
        document.getElementById("active-class-desc").textContent = activeClass.desc;

        const videoContainer = document.getElementById("video-frame-container");
        const ytRegEx = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([a-zA-Z0-9_-]{11})/;
        const match = activeClass.videoUrl.match(ytRegEx);
        
        if (match) {
            const videoId = match[1];
            videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=1&showinfo=0&disablekb=1" allowfullscreen></iframe>`;
        } else {
            videoContainer.innerHTML = `
                <video controls controlsList="nodownload" playsinline preload="metadata">
                    <source src="${activeClass.videoUrl}" type="video/mp4">
                    Tu navegador no soporta reproducción de video.
                </video>
            `;
        }
    }
}

// ==========================================
// 5. ADMIN RENDERING & LOGIC
// ==========================================
function renderAdminPanel() {
    refreshAdminChecklist();
    renderUsersTable();
    renderCoursesOptions();
    renderCourseLessonsTree();
}

function refreshAdminChecklist() {
    const container = document.getElementById("courses-checklist");
    const courses = state.getCourses();
    
    container.innerHTML = courses.map(c => `
        <label class="checklist-item">
            <input type="checkbox" name="allowed-courses" value="${c.id}">
            <span>${c.title}</span>
        </label>
    `).join("");
}

function renderUsersTable() {
    const searchVal = document.getElementById("search-users").value.toLowerCase();
    const users = state.getUsers().filter(u => !u.isAdmin);
    const tableBody = document.getElementById("users-table-body");
    const courses = state.getCourses();

    const filteredUsers = users.filter(u => 
        u.displayName.toLowerCase().includes(searchVal) || 
        u.username.toLowerCase().includes(searchVal)
    );

    if (filteredUsers.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--text-muted); padding:2rem 0;">No se encontraron alumnos.</td></tr>`;
        return;
    }

    tableBody.innerHTML = filteredUsers.map(user => {
        const courseBadges = user.allowedCourses.map(cid => {
            const course = courses.find(c => c.id === cid);
            return course ? `<span class="course-badge">${course.title}</span>` : "";
        }).join("");

        const accessDisplay = courseBadges || `<span class="course-badge empty">Ninguno (Inactivo)</span>`;

        return `
            <tr>
                <td>
                    <div class="user-cell-name">${user.displayName}</div>
                    <div class="user-cell-username">@${user.username}</div>
                </td>
                <td>
                    <div>Usuario: <span class="badge-key">${user.username}</span></div>
                    <div style="margin-top:0.25rem;">Clave: <span class="badge-key">${user.password}</span></div>
                </td>
                <td>
                    <div class="badges-courses-list">${accessDisplay}</div>
                </td>
                <td style="text-align: right;">
                    <div class="actions-cell">
                        <button class="btn-icon edit" data-id="${user.id}" title="Editar alumno">
                            <i data-lucide="edit-2"></i>
                        </button>
                        <button class="btn-icon delete" data-id="${user.id}" title="Eliminar alumno">
                            <i data-lucide="trash-2"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join("");

    lucide.createIcons();

    document.querySelectorAll(".btn-icon.edit").forEach(btn => {
        btn.addEventListener("click", () => {
            editUser(btn.getAttribute("data-id"));
        });
    });

    document.querySelectorAll(".btn-icon.delete").forEach(btn => {
        btn.addEventListener("click", () => {
            deleteUser(btn.getAttribute("data-id"));
        });
    });
}

function renderCoursesOptions() {
    const select = document.getElementById("class-course-id");
    const courses = state.getCourses();
    select.innerHTML = courses.map(c => `<option value="${c.id}">${c.title}</option>`).join("");
}

function renderCourseLessonsTree() {
    const tree = document.getElementById("course-lessons-tree");
    const courses = state.getCourses();
    const classes = state.getClasses();

    tree.innerHTML = courses.map(course => {
        const courseClasses = classes.filter(cls => cls.courseId === course.id);
        const classItemsHTML = courseClasses.map(cls => `
            <div class="tree-class-item">
                <div class="class-info">
                    <i data-lucide="video"></i>
                    <span>${cls.title}</span>
                </div>
                <div style="display:flex; gap: 10px;">
                    <button class="btn-text edit-class" data-class-id="${cls.id}" style="color:var(--primary); text-decoration:none; font-size:0.8rem; font-weight: 600;">
                        Editar
                    </button>
                    <button class="btn-text delete-class" data-class-id="${cls.id}" style="color:hsl(0,80%,50%); text-decoration:none; font-size:0.8rem;">
                        Eliminar
                    </button>
                </div>
            </div>
        `).join("");

        const classListHTML = classItemsHTML || `<div class="class-empty">No hay clases en este curso.</div>`;

        return `
            <div class="tree-course-node">
                <div class="tree-course-header">
                    <span><i data-lucide="folder"></i> ${course.title}</span>
                    <span style="font-size:0.8rem; font-weight:normal; color:var(--text-secondary);">${courseClasses.length} clases</span>
                </div>
                <div class="tree-class-list">
                    ${classListHTML}
                </div>
            </div>
        `;
    }).join("");

    lucide.createIcons();

    document.querySelectorAll(".edit-class").forEach(btn => {
        btn.addEventListener("click", () => {
            const classId = btn.getAttribute("data-class-id");
            editClass(classId);
        });
    });

    document.querySelectorAll(".delete-class").forEach(btn => {
        btn.addEventListener("click", async () => {
            const classId = btn.getAttribute("data-class-id");
            if (confirm("¿Estás seguro de que deseas eliminar esta clase?")) {
                const deletedClass = state.getClasses().find(c => c.id === classId);
                
                await state.deleteClassSingle(classId);
                
                if (deletedClass) {
                    const coursesList = state.getCourses();
                    const courseIdx = coursesList.findIndex(co => co.id === deletedClass.courseId);
                    if (courseIdx !== -1) {
                        coursesList[courseIdx].lessonsCount = Math.max(0, coursesList[courseIdx].lessonsCount - 1);
                        await state.updateCourseSingle(coursesList[courseIdx]);
                    }
                }
                
                renderAdminPanel();
                renderPublicCourses();
            }
        });
    });
}

function editUser(userId) {
    const users = state.getUsers();
    const user = users.find(u => u.id === userId);
    if (!user) return;

    state.editingUserId = userId;
    document.getElementById("edit-user-id").value = userId;
    document.getElementById("user-displayname").value = user.displayName;
    document.getElementById("user-username").value = user.username;
    document.getElementById("user-password").value = user.password;
    document.getElementById("user-form-title").innerHTML = `<i data-lucide="user-cog"></i> Editar Alumno: ${user.displayName}`;
    document.getElementById("btn-cancel-edit").style.display = "inline-block";

    document.querySelectorAll('input[name="allowed-courses"]').forEach(cb => {
        cb.checked = user.allowedCourses.includes(cb.value);
    });

    lucide.createIcons();
}

function cancelEditUser() {
    state.editingUserId = null;
    document.getElementById("edit-user-id").value = "";
    document.getElementById("form-manage-user").reset();
    document.getElementById("user-form-title").innerHTML = `<i data-lucide="user-plus"></i> Crear Nuevo Alumno`;
    document.getElementById("btn-cancel-edit").style.display = "none";
    lucide.createIcons();
}

async function deleteUser(userId) {
    if (confirm("¿Estás seguro de que deseas eliminar a este alumno? Perderá acceso a todas sus clases inmediatamente.")) {
        await state.deleteUserSingle(userId);
        renderUsersTable();
    }
}

// ==========================================
// 6. EVENT LISTENERS SETUP
// ==========================================
function setupEventListeners() {
    document.getElementById("btn-nav-home").addEventListener("click", (e) => {
        e.preventDefault();
        switchView("home");
    });
    
    document.getElementById("btn-nav-portal").addEventListener("click", (e) => {
        e.preventDefault();
        switchView("portal");
    });
    
    document.getElementById("btn-nav-admin").addEventListener("click", (e) => {
        e.preventDefault();
        switchView("admin");
    });

    document.getElementById("nav-logo").addEventListener("click", (e) => {
        e.preventDefault();
        switchView("home");
    });

    document.getElementById("btn-explore").addEventListener("click", (e) => {
        if (state.currentView !== "home") {
            switchView("home");
        }
    });

    document.getElementById("mobile-toggle").addEventListener("click", () => {
        const menu = document.getElementById("nav-menu");
        menu.classList.toggle("show");
    });

    document.getElementById("btn-login-logout").addEventListener("click", (e) => {
        e.preventDefault();
        if (state.currentUser) {
            state.currentUser = null;
            sessionStorage.removeItem("currentUser");
            state.activeCourseId = null;
            state.activeClassId = null;
            updateNavbarState();
            switchView("home");
        } else {
            switchView("login");
        }
    });

    document.getElementById("form-login").addEventListener("submit", (e) => {
        e.preventDefault();
        const userVal = document.getElementById("login-username").value.trim().toLowerCase();
        const passVal = document.getElementById("login-password").value.trim();
        const errorDiv = document.getElementById("login-error");

        const users = state.getUsers();
        const foundUser = users.find(u => u.username.toLowerCase() === userVal && u.password === passVal);

        if (foundUser) {
            errorDiv.style.display = "none";
            state.currentUser = foundUser;
            sessionStorage.setItem("currentUser", JSON.stringify(foundUser));
            document.getElementById("form-login").reset();
            updateNavbarState();

            if (foundUser.isAdmin) {
                switchView("admin");
            } else {
                switchView("portal");
            }
        } else {
            errorDiv.style.display = "flex";
        }
    });

    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
            
            btn.classList.add("active");
            document.getElementById(btn.getAttribute("data-tab")).classList.add("active");
        });
    });

    document.getElementById("form-manage-user").addEventListener("submit", async (e) => {
        e.preventDefault();
        const displayName = document.getElementById("user-displayname").value.trim();
        const username = document.getElementById("user-username").value.trim().toLowerCase();
        const password = document.getElementById("user-password").value.trim();
        
        const checkedBoxes = document.querySelectorAll('input[name="allowed-courses"]:checked');
        const allowedCourses = Array.from(checkedBoxes).map(cb => cb.value);

        const users = state.getUsers();

        const usernameExists = users.some(u => u.username.toLowerCase() === username && u.id !== state.editingUserId);
        if (usernameExists) {
            alert("Este nombre de usuario ya está registrado por otro alumno. Elija otro.");
            return;
        }

        if (state.editingUserId) {
            const userObj = {
                id: state.editingUserId,
                displayName,
                username,
                password,
                isAdmin: false,
                allowedCourses
            };
            await state.saveUserSingle(userObj);
            alert("Alumno actualizado exitosamente.");
            cancelEditUser();
        } else {
            const newUser = {
                id: "usr-" + Date.now(),
                displayName,
                username,
                password,
                isAdmin: false,
                allowedCourses
            };
            await state.saveUserSingle(newUser);
            alert(`Alumno "${displayName}" creado correctamente.`);
            document.getElementById("form-manage-user").reset();
        }

        renderUsersTable();
    });

    document.getElementById("btn-cancel-edit").addEventListener("click", (e) => {
        e.preventDefault();
        cancelEditUser();
    });

    document.getElementById("search-users").addEventListener("input", () => {
        renderUsersTable();
    });

    document.getElementById("form-add-class").addEventListener("submit", async (e) => {
        e.preventDefault();
        const editId = document.getElementById("edit-class-id").value;
        const courseId = document.getElementById("class-course-id").value;
        const title = document.getElementById("class-title").value.trim();
        const desc = document.getElementById("class-desc").value.trim();
        const videoUrl = document.getElementById("class-video-url").value.trim();

        if (editId) {
            // Edición
            const existingClass = state.getClasses().find(c => c.id === editId);
            if (existingClass) {
                const oldCourseId = existingClass.courseId;
                
                existingClass.courseId = courseId;
                existingClass.title = title;
                existingClass.desc = desc;
                existingClass.videoUrl = videoUrl;

                await state.saveClassSingle(existingClass);

                // Si se cambió de curso, corregimos los contadores
                if (oldCourseId !== courseId) {
                    const coursesList = state.getCourses();
                    
                    const oldCourseIdx = coursesList.findIndex(c => c.id === oldCourseId);
                    if (oldCourseIdx !== -1) {
                        coursesList[oldCourseIdx].lessonsCount = Math.max(0, coursesList[oldCourseIdx].lessonsCount - 1);
                        await state.updateCourseSingle(coursesList[oldCourseIdx]);
                    }

                    const newCourseIdx = coursesList.findIndex(c => c.id === courseId);
                    if (newCourseIdx !== -1) {
                        coursesList[newCourseIdx].lessonsCount += 1;
                        await state.updateCourseSingle(coursesList[newCourseIdx]);
                    }
                }

                alert(`Clase "${title}" modificada con éxito.`);
                cancelEditClass();
            }
        } else {
            // Creación
            const newClass = {
                id: "cls-" + Date.now(),
                courseId,
                title,
                desc,
                videoUrl
            };

            await state.saveClassSingle(newClass);

            const courses = state.getCourses();
            const courseIdx = courses.findIndex(c => c.id === courseId);
            if (courseIdx !== -1) {
                courses[courseIdx].lessonsCount += 1;
                await state.updateCourseSingle(courses[courseIdx]);
            }

            alert(`Clase "${title}" agregada con éxito al curso.`);
            document.getElementById("form-add-class").reset();
        }
        
        renderAdminPanel();
        renderPublicCourses();
    });

    const btnCancelEditClass = document.getElementById("btn-cancel-edit-class");
    if (btnCancelEditClass) {
        btnCancelEditClass.addEventListener("click", (e) => {
            e.preventDefault();
            cancelEditClass();
        });
    }

    // ==========================================
    // 7. COMPRAR / REGISTRO MODAL LISTENERS
    // ==========================================
    const modalPurchase = document.getElementById("modal-purchase");
    const btnCloseModal = document.getElementById("btn-close-modal");
    
    if (btnCloseModal) {
        btnCloseModal.addEventListener("click", (e) => {
            e.preventDefault();
            modalPurchase.style.display = "none";
        });
    }

    // Delegación de clics en "Inscribirse" del catálogo
    const publicCoursesGrid = document.getElementById("public-courses-grid");
    if (publicCoursesGrid) {
        publicCoursesGrid.addEventListener("click", async (e) => {
            const btn = e.target.closest(".btn-buy-course");
            if (btn) {
                const courseId = btn.getAttribute("data-id");
                const courseTitle = btn.getAttribute("data-title");
                
                document.getElementById("purchase-course-id").value = courseId;
                document.getElementById("modal-course-title").textContent = courseTitle;
                
                // Si el alumno ya está logueado en la plataforma
                if (state.currentUser) {
                    if (state.currentUser.allowedCourses.includes(courseId)) {
                        alert("Ya estás inscrito en este curso. Ve a tu Portal para acceder.");
                        return;
                    }
                    
                    if (confirm(`Estás logueado como ${state.currentUser.displayName} (${state.currentUser.email || state.currentUser.username}).\n\n¿Quieres proceder al pago del curso "${courseTitle}"?`)) {
                        await handleDirectPurchase(state.currentUser, courseId);
                    }
                } else {
                    modalPurchase.style.display = "flex";
                }
            }
        });
    }

    // Enviar formulario de compra/registro mediante Google
    const btnPurchaseGoogle = document.getElementById("btn-purchase-google");
    if (btnPurchaseGoogle) {
        btnPurchaseGoogle.addEventListener("click", async () => {
            const courseId = document.getElementById("purchase-course-id").value;
            const loadingMsg = document.getElementById("purchase-loading-msg");

            if (!state.isFirebaseEnabled) {
                alert("La autenticación con Google requiere que Firebase esté activo y configurado. Por favor, completa la configuración de Firebase en app.js y activa Google Sign-In en tu consola Firebase.");
                return;
            }

            try {
                // 1. Autenticar con Google
                const provider = new firebase.auth.GoogleAuthProvider();
                const result = await firebase.auth().signInWithPopup(provider);
                const user = result.user;
                const email = user.email.toLowerCase();
                const displayName = user.displayName || "Alumno de Costura";
                const username = email.split("@")[0] + "_g";

                // Ocultar botón y mostrar spinner de carga
                btnPurchaseGoogle.style.display = "none";
                loadingMsg.style.display = "block";

                // 2. Buscar si ya existe el usuario
                const users = state.getUsers();
                let foundUser = users.find(u => u.email && u.email.toLowerCase() === email);

                if (!foundUser) {
                    // Si no existe, crear pre-inscripto (bloqueado)
                    foundUser = {
                        id: "usr-" + Date.now(),
                        displayName: displayName,
                        username: username,
                        password: "google_account_no_password",
                        email: email,
                        isAdmin: false,
                        allowedCourses: [] // Bloqueado inicialmente
                    };
                    await state.saveUserSingle(foundUser);
                }

                // 3. Preparar webhook de Make
                const MAKE_WEBHOOK_URL = "https://hook.us2.make.com/5tlsj36tj7wyatba344jv9v1g5bpxevd";
                const purchaseData = {
                    courseId: courseId,
                    displayName: displayName,
                    email: email,
                    username: username,
                    password: "google_account_no_password"
                };

                if (MAKE_WEBHOOK_URL.includes("TU_WEBHOOK_ID_AQUÍ")) {
                    // Modo simulador
                    alert("⚙️ Modo Simulación Activo:\n\nComo no has configurado la URL real del Webhook de Make.com, simularemos un pago exitoso por ti. El sistema activará tu cuenta de inmediato.");
                    
                    if (!foundUser.allowedCourses.includes(courseId)) {
                        foundUser.allowedCourses.push(courseId);
                        await state.saveUserSingle(foundUser);
                    }
                    
                    alert(`¡Inscripción simulada con éxito! Tu usuario de Google "${email}" ahora tiene acceso a este curso.`);
                    modalPurchase.style.display = "none";
                    
                    // Login automático del alumno
                    state.currentUser = foundUser;
                    sessionStorage.setItem("currentUser", JSON.stringify(foundUser));
                    updateNavbarState();
                    switchView("portal");
                } else {
                    // Realizar petición a Make
                    const response = await fetch(MAKE_WEBHOOK_URL, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(purchaseData)
                    });

                    if (response.ok) {
                        const result = await response.json();
                        if (result.checkoutUrl) {
                            // Redirigir a Mercado Pago
                            window.location.href = result.checkoutUrl;
                        } else {
                            alert("Error: Make.com no devolvió el link de pago (checkoutUrl).");
                        }
                    } else {
                        alert("Error del servidor de pagos de Make.com.");
                    }
                }
            } catch (error) {
                console.error("Error al iniciar sesión con Google para compra:", error);
                alert("Error al iniciar la inscripción con Google: " + error.message);
            } finally {
                btnPurchaseGoogle.style.display = "flex";
                loadingMsg.style.display = "none";
            }
        });
    }

    // Google Sign-In Listener
    const btnGoogle = document.getElementById("btn-login-google");
    if (btnGoogle) {
        btnGoogle.addEventListener("click", async () => {
            if (!state.isFirebaseEnabled) {
                alert("La autenticación con Google requiere que Firebase esté activo y configurado. Por favor, completa la configuración de Firebase en app.js y activa Google Sign-In en tu consola Firebase.");
                return;
            }

            try {
                const provider = new firebase.auth.GoogleAuthProvider();
                const result = await firebase.auth().signInWithPopup(provider);
                const user = result.user;
                const email = user.email.toLowerCase();

                // Buscar usuario en Firebase por email
                const users = state.getUsers();
                let foundUser = users.find(u => u.email && u.email.toLowerCase() === email);

                if (!foundUser) {
                    // Si no existe el usuario (es la primera vez que se loguea), creamos su cuenta de alumno básica vacía
                    foundUser = {
                        id: "usr-" + Date.now(),
                        displayName: user.displayName || "Alumno de Costura",
                        username: email.split("@")[0] + "_g",
                        password: "google_account_no_password",
                        email: email,
                        isAdmin: false,
                        allowedCourses: [] // Vacío inicialmente, debe adquirir cursos
                    };
                    await state.saveUserSingle(foundUser);
                }

                alert(`¡Sesión iniciada correctamente!\n\nBienvenido/a, ${foundUser.displayName}`);
                state.currentUser = foundUser;
                sessionStorage.setItem("currentUser", JSON.stringify(foundUser));
                updateNavbarState();
                
                // Redirigir al portal del alumno
                switchView("portal");

            } catch (error) {
                console.error("Error al iniciar sesión con Google:", error);
                alert("Error al iniciar sesión con Google: " + error.message + "\n\n(Asegúrate de haber activado el proveedor Google en la consola de Firebase -> Authentication -> Sign-in method).");
            }
        });
    }
}

// ==========================================
// 8. AUTOPAYMENT VALIDATION ON REDIRECT (Retorno de Mercado Pago)
// ==========================================
async function checkPaymentReturn() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status") || urlParams.get("collection_status");
    const externalRef = urlParams.get("external_reference");

    if ((status === "approved" || status === "success") && externalRef) {
        // Formato externalRef: username|password|displayName|courseId o username|courseId
        const parts = decodeURIComponent(externalRef).split("|");
        if (parts.length >= 2) {
            const username = parts[0].toLowerCase().trim();
            const courseId = parts[3] ? parts[3].trim() : parts[1].trim();

            let users = state.getUsers();
            const user = users.find(u => u.username.toLowerCase() === username);

            if (user) {
                if (!user.allowedCourses.includes(courseId)) {
                    user.allowedCourses.push(courseId);
                    await state.saveUserSingle(user);
                }

                alert(`¡Inscripción Exitosa!\n\nHola ${user.displayName}, tu pago fue aprobado con éxito y el acceso al curso ha sido activado de inmediato. ¡Bienvenido/a!`);
                
                // Login automático
                state.currentUser = user;
                sessionStorage.setItem("currentUser", JSON.stringify(user));
                updateNavbarState();
                switchView("portal");

                // Limpiar la URL de los parámetros para que no repita el proceso al recargar
                const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
                window.history.replaceState({}, document.title, cleanUrl);
            }
        }
    }
}

function editClass(classId) {
    const classes = state.getClasses();
    const cls = classes.find(c => c.id === classId);
    if (!cls) return;

    document.getElementById("edit-class-id").value = classId;
    document.getElementById("class-course-id").value = cls.courseId;
    document.getElementById("class-title").value = cls.title;
    document.getElementById("class-desc").value = cls.desc;
    document.getElementById("class-video-url").value = cls.videoUrl;

    const form = document.getElementById("form-add-class");
    const titleBox = form.previousElementSibling.querySelector("h3");
    if (titleBox) {
        titleBox.innerHTML = `<i data-lucide="edit-3" style="color:var(--primary);"></i> Editar Clase: ${cls.title}`;
    }
    
    document.getElementById("btn-submit-class").innerHTML = `Guardar Cambios <i data-lucide="save"></i>`;
    document.getElementById("btn-cancel-edit-class").style.display = "inline-block";
    lucide.createIcons();
}

function cancelEditClass() {
    document.getElementById("edit-class-id").value = "";
    document.getElementById("form-add-class").reset();
    
    const form = document.getElementById("form-add-class");
    const titleBox = form.previousElementSibling.querySelector("h3");
    if (titleBox) {
        titleBox.innerHTML = `<i data-lucide="file-video" style="color:var(--primary);"></i> Agregar Clase a Curso`;
    }
    
    document.getElementById("btn-submit-class").innerHTML = `Agregar Clase <i data-lucide="plus"></i>`;
    document.getElementById("btn-cancel-edit-class").style.display = "none";
    lucide.createIcons();
}

async function handleDirectPurchase(user, courseId) {
    const MAKE_WEBHOOK_URL = "https://hook.us2.make.com/5tlsj36tj7wyatba344jv9v1g5bpxevd";
    const purchaseData = {
        courseId: courseId,
        displayName: user.displayName,
        email: user.email || (user.username + "@costuracreativa.com"),
        username: user.username,
        password: user.password || "google_account_no_password"
    };

    try {
        const modalPurchase = document.getElementById("modal-purchase");
        document.getElementById("purchase-course-id").value = courseId;
        document.getElementById("modal-course-title").textContent = "Procesando...";
        modalPurchase.style.display = "flex";
        
        const btnPurchaseGoogle = document.getElementById("btn-purchase-google");
        const loadingMsg = document.getElementById("purchase-loading-msg");
        if (btnPurchaseGoogle && loadingMsg) {
            btnPurchaseGoogle.style.display = "none";
            loadingMsg.style.display = "block";
            loadingMsg.querySelector("span").textContent = "Redirigiendo a la pasarela de pagos...";
        }

        if (MAKE_WEBHOOK_URL.includes("TU_WEBHOOK_ID_AQUÍ")) {
            // Modo simulador
            alert("⚙️ Modo Simulación Activo:\n\nComo no has configurado la URL real del Webhook de Make.com, simularemos un pago exitoso por ti. El sistema activará tu cuenta de inmediato.");
            
            if (!user.allowedCourses.includes(courseId)) {
                user.allowedCourses.push(courseId);
                await state.saveUserSingle(user);
            }
            
            alert(`¡Inscripción simulada con éxito! Has sido inscrito en el curso.`);
            modalPurchase.style.display = "none";
            
            state.currentUser = user;
            sessionStorage.setItem("currentUser", JSON.stringify(user));
            updateNavbarState();
            switchView("portal");
        } else {
            const response = await fetch(MAKE_WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(purchaseData)
            });

            if (response.ok) {
                const result = await response.json();
                if (result.checkoutUrl) {
                    window.location.href = result.checkoutUrl;
                } else {
                    alert("Error: Make.com no devolvió el link de pago (checkoutUrl).");
                    modalPurchase.style.display = "none";
                }
            } else {
                alert("Error del servidor de pagos de Make.com.");
                modalPurchase.style.display = "none";
            }
        }
    } catch (error) {
        console.error("Error al procesar compra directa:", error);
        alert("Error al procesar la inscripción: " + error.message);
        document.getElementById("modal-purchase").style.display = "none";
    }
}
