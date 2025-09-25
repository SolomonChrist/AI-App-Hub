
import React, { useState, useEffect, useMemo } from 'react';
import { type Repository } from './types';
import { getRepositories } from './services/githubService';
import Header from './components/Header';
import RepoCard from './components/RepoCard';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedRepos = await getRepositories('SolomonChrist');
        setRepos(fetchedRepos);
      } catch (err) {
        if (err instanceof Error) {
          setError(`Failed to fetch repositories: ${err.message}`);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const filteredRepos = useMemo(() => {
    return repos.filter(repo =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [repos, searchTerm]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 bg-red-100 p-4 rounded-lg">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRepos.length > 0 ? (
              filteredRepos.map(repo => <RepoCard key={repo.id} repo={repo} />)
            ) : (
              <div className="col-span-full text-center text-gray-500 py-16">
                <h3 className="text-2xl font-semibold">No repositories found.</h3>
                <p>Try adjusting your search term.</p>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
