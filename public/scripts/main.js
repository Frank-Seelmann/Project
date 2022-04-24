let user;
let loginbadge
if (loginbadge = document.getElementById('loginbadge')) {
    if (user = getCurrentUser()) {
        loginbadge.innerHTML =
            `
    <ul class="navbar-nav white">
        <li class="nav-link">Hello ${user.userName}! </li>
        <li class="nav-link"><a id="logout">Logout</a></li>
    </ul>
    `;
    } else {
        loginbadge.innerHTML = `
    <ul class="navbar-nav">
        <li class="nav-link">
            <a href="login.html" class="justify-content-end"><button type="button" class="btn btn-outline-secondary justify-content-end">Login</button></a>
        </li>
        <li class="nav-link">
            <a href="signup.html" class="justify-content-end"><button type="button" class="btn btn-outline-primary justify-content-end">Sign Up</button></a>
        </li>
    </ul>
  `
    }
}

// Fetch method implementation:
export async function fetchData(url = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${url}`, {
        method: methodType, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if (response.ok) {
        return await response.json(); // parses JSON response into native JavaScript objects
    } else {
        throw await response.json();
    }
}

export function setCurrentUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

export function removeCurrentUser() {
    localStorage.removeItem('user')
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export const logoutBtn = document.getElementById("logout");
if (logoutBtn) logoutBtn.addEventListener('click', logout)

export function logout() {
    removeCurrentUser();
    window.location.href = "login.html";
}