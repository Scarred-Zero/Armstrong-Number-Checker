import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

const AttemptHistory = ({ apiAppUrlPrefix, version = 0 }) => {
    const [attempts, setAttempts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deletingId, setDeletingId] = useState(null);

    const fetchAttempts = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const headers = token ? { Authorization: `Bearer ${token}` } : {};
            const res = await axios.get(`${apiAppUrlPrefix}/attempts`, { headers });
            setAttempts(res.data.attempts || []);
        } catch (err) {
            setAttempts([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAttempts();
    }, [apiAppUrlPrefix, version]);

    const handleDelete = async (id) => {
        // const ok = window.confirm('Delete this attempt? This action cannot be undone.');
        // if (!ok) return;
        setDeletingId(id);
        try {
            const token = localStorage.getItem('token');
            const headers = token ? {Authorization: `Bearer ${token}`} : {};
            await axios.delete(`${apiAppUrlPrefix}/attempts/${id}`, {headers});
            setAttempts(prev => prev.filter(a => a.id !== id));
        } catch (err) {
            console.error('Failed to delete attempt:', err);
            alert(err.response?.data?.error || 'Failed to delete attempt.');
        } finally {
            setDeletingId(null);
        }
    };

    if (loading) return <div>Loading attempts...</div>;
    if (!attempts.length) return <div><h3><u>Your attempts will show here</u>👇🏻</h3></div>;

    return (
        <div className="attempt-history">
            <h3>Your Attempts History😁</h3>
            <ul className='attempt-list'>
                {attempts.map(attempt => (
                    <li key={attempt.id} className='attempt-item'>
                        <div className='attempt-entry'>
                            <div className='attempt-details'>
                                <strong>
                                    {attempt.attempt_type === 'range' ? 'Range' : 'Single'} -
                                </strong>{' '}
                                {attempt.attempt_type === 'range' ? (
                                    <p>
                                        Min: {attempt.min_num}, Max: {attempt.max_num}
                                        <br />
                                        <strong>Result -</strong>{' '}
                                        <br />
                                        {Array.isArray(attempt.result)
                                            ? attempt.result.length
                                                ? attempt.result.join(', ')
                                                : 'No Armstrong numbers found in this range.'
                                            : attempt.result}
                                    </p>
                                ) : (
                                    <p>
                                        Number: {attempt.number}
                                        <br />
                                        <strong>Result -</strong>
                                        <br />
                                         {attempt.result}
                                    </p>
                                )}
                                <small className='attempt-timestamp'>{new Date(attempt.timestamp).toLocaleString()}</small>
                            </div>
                            <div style={{ marginLeft: '0.5rem' }}>
                                <button
                                    className="btn btn__danger btn__small"
                                    disabled={deletingId === attempt.id}
                                    onClick={() => handleDelete(attempt.id)}
                                    aria-label="Delete attempt"
                                >
                                    {deletingId === attempt.id ? 'Deleting...' : 'Delete'}
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AttemptHistory;