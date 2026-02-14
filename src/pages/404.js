import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function NotFound() {
    return (
        <Layout>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '80vh',
                    textAlign: 'center',
                    background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                    position: 'relative',
                    overflow: 'hidden',
                }}>

                {/* Abstract Background Element */}
                <div style={{
                    position: 'absolute',
                    width: '600px',
                    height: '600px',
                    border: '1px solid rgba(212, 175, 55, 0.1)',
                    borderRadius: '50%',
                    animation: 'pulseGlow 8s infinite ease-in-out',
                    pointerEvents: 'none',
                }} />

                <h1 style={{
                    fontSize: '10rem',
                    fontWeight: '900',
                    margin: 0,
                    background: 'linear-gradient(135deg, #f0ece2 0%, #d4af37 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: '1',
                    opacity: 0.9,
                }}>
                    404
                </h1>

                <h2 style={{
                    fontSize: '2rem',
                    color: '#d4af37',
                    marginTop: '1rem',
                    marginBottom: '1.5rem',
                    fontWeight: '600',
                }}>
                    Page Not Found
                </h2>

                <p style={{
                    fontSize: '1.1rem',
                    color: '#a8a4a0',
                    maxWidth: '500px',
                    margin: '0 auto 2.5rem',
                    lineHeight: '1.6',
                }}>
                    We could not find what you were looking for.
                    The page might have been removed, renamed, or is currently lost in the democratic process.
                </p>

                <Link
                    to="/"
                    style={{
                        padding: '0.8rem 2rem',
                        background: 'linear-gradient(135deg, #d4af37, #c49b2a)',
                        color: '#0a0a0f',
                        borderRadius: '12px',
                        fontWeight: '700',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        boxShadow: '0 4px 20px rgba(212, 175, 55, 0.25)',
                        transition: 'transform 0.2s',
                    }}>
                    Return Home
                </Link>
            </div>
        </Layout>
    );
}
