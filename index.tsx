import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Простой компонент для перехвата ошибок при рендере
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px', 
          color: 'white', 
          backgroundColor: '#020617', 
          height: '100vh', 
          fontFamily: 'system-ui, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 style={{fontSize: '24px', marginBottom: '20px', color: '#f87171'}}>Упс! Что-то сломалось 💀</h1>
          <p style={{marginBottom: '10px', color: '#94a3b8'}}>Покажи эту ошибку разработчику:</p>
          <pre style={{
            color: '#e2e8f0', 
            backgroundColor: '#1e293b', 
            padding: '20px', 
            borderRadius: '12px', 
            overflow: 'auto',
            maxWidth: '800px',
            width: '100%',
            border: '1px solid #334155'
          }}>
            {this.state.error?.toString()}
          </pre>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '30px',
              padding: '12px 24px',
              backgroundColor: '#14b8a6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Перезагрузить страницу
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);