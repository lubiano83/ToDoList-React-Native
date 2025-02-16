import { createContext, useEffect, useState } from "react";

export const TeamContext  = createContext();

export const TeamProvider = ({ children }) => {

    const updateRoleById = () => {};
    const updateCategoryById = () => {};
    const addUserToTeam = () => {};
    const removeUserFromTeam = () => {};
    const leaveTheTeam = () => {};
    const acceptInvitation = () => {};
    const rejectInvitation = () => {};

    return (
        <TeamContext.Provider value={{ updateRoleById, updateCategoryById, addUserToTeam, removeUserFromTeam, leaveTheTeam, acceptInvitation, rejectInvitation }}>
                {children}
        </TeamContext.Provider>
    )
};

export default TeamProvider;