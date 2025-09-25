
import { type Repository } from '../types';

const API_BASE_URL = 'https://api.github.com';

export const getRepositories = async (username: string): Promise<Repository[]> => {
  const response = await fetch(`${API_BASE_URL}/users/${username}/repos?sort=updated&per_page=100`);
  
  if (!response.ok) {
    throw new Error(`GitHub API responded with status ${response.status}`);
  }
  
  const data = await response.json();

  // We map to ensure we only get the fields we need, conforming to our Repository type.
  return data.map((repo: any): Repository => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
    has_pages: repo.has_pages,
  }));
};
