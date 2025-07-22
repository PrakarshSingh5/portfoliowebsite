import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import { fromUnixTime, format } from "date-fns";
import "react-calendar-heatmap/dist/styles.css"; // default CSS

const LeetCodeProfile = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/prakarshsingh1")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Failed to fetch LeetCode stats:", err));
  }, []);

  if (!stats) return <p className="text-white">Loading LeetCode Data...</p>;

  // Prepare heatmap data
  const values = Object.entries(stats.submissionCalendar || {}).map(
    ([timestamp, count]) => ({
      date: format(fromUnixTime(parseInt(timestamp)), "yyyy-MM-dd"),
      count,
    })
  );

  const startDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
  const endDate = new Date();

  return (
    <div className="text-white p-8 rounded-xl shadow-md max-w-5xl mx-auto pt-16">
      <h1 className="text-black text-3xl font-bold mb-6 text-center">🚀 My LeetCode Progress</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center mb-10">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Total Solved</h2>
          <p className="text-2xl">{stats.totalSolved} / {stats.totalQuestions}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Easy</h2>
          <p className="text-2xl">{stats.easySolved} / {stats.totalEasy}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Medium</h2>
          <p className="text-2xl">{stats.mediumSolved} / {stats.totalMedium}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Hard</h2>
          <p className="text-2xl">{stats.hardSolved} / {stats.totalHard}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Ranking</h2>
          <p className="text-2xl">#{stats.ranking}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Acceptance Rate</h2>
          <p className="text-2xl">{stats.acceptanceRate}%</p>
        </div>
      </div>

      {/* Heatmap Section */}
      <div>
        <h2 className="text-black text-2xl font-semibold mb-4">Submission Heatmap</h2>
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={values}
          classForValue={(value) => {
            if (!value) return "color-empty";
            if (value.count >= 10) return "color-github-4";
            if (value.count >= 6) return "color-github-3";
            if (value.count >= 3) return "color-github-2";
            return "color-github-1";
          }}
          tooltipDataAttrs={(value) =>
            value.date
              ? { "data-tip": `${value.date}: ${value.count} submissions` }
              : { "data-tip": "No submissions" }
          }
          showWeekdayLabels
        />
      </div>
    </div>
  );
};

export default LeetCodeProfile;
