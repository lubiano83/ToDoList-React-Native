import { useContext } from 'react';
import { TeamContext } from '../context/TeamContext';

export default function useTeam() {
    const context = useContext(TeamContext);
    if (!context) throw new Error('useAuth must be used within an TeamProvider');
    return context;
}