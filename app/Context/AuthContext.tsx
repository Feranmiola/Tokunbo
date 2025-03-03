'use client';
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AuthContextType {
    username: string;
    setUsername: (username: string) => void;
    email: string;
    setEmail: (email: string) => void;
    user_id: string;
    setUserId: (user_id: string) => void;
    role: string;
    setRole: (role: string) => void;
    profilePicture: string;
    setProfilePicture: (profilePicture: string) => void;
    accessToken: string;
    setAccessToken: (accessToken: string) => void;
    refreshToken: string;
    setRefreshToken: (refreshToken: string) => void;
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void; 
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [user_id, setUserId] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [profilePicture, setProfilePicture] = useState<string>('');
    const [accessToken, setAccessToken] = useState<string>('');
    const [refreshToken, setRefreshToken] = useState<string>('');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadAuthState = () => {
            const storedUsername = localStorage.getItem('TOKUNBO_MARKET_username') || '';
            const storedEmail = localStorage.getItem('TOKUNBO_MARKET_email') || '';
            const storedUserId = localStorage.getItem('TOKUNBO_MARKET_user_id') || '';
            const storedRole = localStorage.getItem('TOKUNBO_MARKET_role') || '';
            const storedProfilePicture = localStorage.getItem('TOKUNBO_MARKET_profilePicture') || '';
            const storedAccessToken = localStorage.getItem('TOKUNBO_MARKET_accessToken') || '';
            const storedRefreshToken = localStorage.getItem('TOKUNBO_MARKET_refreshToken') || '';
            const storedIsAuthenticated = localStorage.getItem('TOKUNBO_MARKET_isAuthenticated') === 'true';

            setUsername(storedUsername);
            setEmail(storedEmail);
            setUserId(storedUserId);
            setRole(storedRole);
            setProfilePicture(storedProfilePicture);
            setAccessToken(storedAccessToken);
            setRefreshToken(storedRefreshToken);
            setIsAuthenticated(storedIsAuthenticated);
            setIsLoading(false);
        };

        loadAuthState();
    }, []);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('TOKUNBO_MARKET_username', username);
            localStorage.setItem('TOKUNBO_MARKET_email', email);
            localStorage.setItem('TOKUNBO_MARKET_user_id', user_id);
            localStorage.setItem('TOKUNBO_MARKET_role', role);
            localStorage.setItem('TOKUNBO_MARKET_profilePicture', profilePicture);
            localStorage.setItem('TOKUNBO_MARKET_accessToken', accessToken);
            localStorage.setItem('TOKUNBO_MARKET_refreshToken', refreshToken);
            localStorage.setItem('TOKUNBO_MARKET_isAuthenticated', isAuthenticated.toString());
        }
    }, [
        username, email, user_id, role, profilePicture, 
        accessToken, refreshToken, isAuthenticated, isLoading
    ]);

    const logout = () => {
        setUsername('');
        setEmail('');
        setUserId('');
        setRole('');
        setProfilePicture('');
        setAccessToken('');
        setRefreshToken('');
        setIsAuthenticated(false);

        localStorage.removeItem('TOKUNBO_MARKET_username');
        localStorage.removeItem('TOKUNBO_MARKET_email');
        localStorage.removeItem('TOKUNBO_MARKET_user_id');
        localStorage.removeItem('TOKUNBO_MARKET_role');
        localStorage.removeItem('TOKUNBO_MARKET_profilePicture');
        localStorage.removeItem('TOKUNBO_MARKET_accessToken');
        localStorage.removeItem('TOKUNBO_MARKET_refreshToken');
        localStorage.removeItem('TOKUNBO_MARKET_isAuthenticated');

        window.location.reload();
    };

    return (
        <AuthContext.Provider value={{
            username, setUsername,
            email, setEmail,
            user_id, setUserId,
            role, setRole,
            profilePicture, setProfilePicture,
            accessToken, setAccessToken,
            refreshToken, setRefreshToken,
            isAuthenticated, setIsAuthenticated,
            logout,
            isLoading
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};