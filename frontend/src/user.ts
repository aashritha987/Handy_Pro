export const user = localStorage.getItem("user") || null;

const userDetails = user ? JSON.parse(user) : null;

export const userName = user ? userDetails.firstName: null;

export const email = user ? userDetails.email: null;

export const userId = user? userDetails.userId: null;

export const userRole = user? userDetails.role: null;