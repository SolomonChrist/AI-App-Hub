
import React from 'react';
import { type Repository } from '../types';
import { GithubIcon, ExternalLinkIcon } from './icons/Icons';

interface RepoCardProps {
  repo: Repository;
}

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  const liveDemoUrl = `https://SolomonChrist.github.io/${repo.name}`;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-200 overflow-hidden">
      <div className="p-5 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 truncate" title={repo.name}>
          {repo.name}
        </h3>
        <p className="text-gray-600 text-sm h-20 overflow-hidden">
          {repo.description || 'No description available.'}
        </p>
      </div>
      <div className="p-5 bg-gray-50 border-t border-gray-200 mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
        >
          <GithubIcon className="w-4 h-4 mr-2" />
          GitHub Repo
        </a>
        {repo.has_pages && (
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            <ExternalLinkIcon className="w-4 h-4 mr-2" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
