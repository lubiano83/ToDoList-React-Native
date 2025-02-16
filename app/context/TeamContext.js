import { createContext, useEffect, useState } from "react";

export const TeamContext  = createContext();

export const TeamProvider = () => {

    const updateRoleById = () => {};
    const updateCategoryById = () => {};
    const addUserToTeam = () => {};
    const removeUserFromTeam = () => {};
    const leaveTheTeam = () => {};
    const acceptInvitation = () => {};
    const rejectInvitation = () => {};

    return (
        <TeamContext.Provider value={{}}>
                {children}
        </TeamContext.Provider>
    )
};

export default TeamProvider;