import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

interface Job {
  id: number;
  title: string;
  company: string;
  description: string;
}

const JobBoardPreview: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  useEffect(() => {
    fetchRandomJobs();
  }, []);

  const fetchRandomJobs = async () => {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .order('RANDOM()')
      .limit(5);

    if (error) {
      console.error('Error fetching jobs:', error);
    } else {
      setJobs(data || []);
    }
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    // Handle swipe logic here
    console.log(`Swiped ${direction} on job ${jobs[currentJobIndex]?.title}`);
    
    // Move to the next job
    setCurrentJobIndex((prevIndex) => (prevIndex + 1) % jobs.length);
  };

  if (jobs.length === 0) {
    return <div>Loading...</div>;
  }

  const currentJob = jobs[currentJobIndex];

  return (
    <div className="job-preview">
      <h2>{currentJob.title}</h2>
      <h3>{currentJob.company}</h3>
      <p>{currentJob.description}</p>
      <div className="swipe-buttons">
        <button onClick={() => handleSwipe('left')}>Swipe Left</button>
        <button onClick={() => handleSwipe('right')}>Swipe Right</button>
      </div>
    </div>
  );
};

export default JobBoardPreview;