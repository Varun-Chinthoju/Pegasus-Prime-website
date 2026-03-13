const TEAM_NUMBER = '97711V';

export const fetchTeamStats = async () => {
  try {
    // We use the excellent vrc-data-analysis API for public stats without needing a Bearer token
    const response = await fetch(`https://vrc-data-analysis.com/v1/team/${TEAM_NUMBER}`);
    if (!response.ok) {
      throw new Error('Failed to fetch stats');
    }
    const data = await response.json();
    return {
      wins: data.total_wins,
      losses: data.total_losses,
      ties: data.total_ties,
      opr: data.opr ? data.opr.toFixed(1) : 'N/A',
      ranking: data.trueskill_ranking,
      awp: data.awp_per_match ? data.awp_per_match.toFixed(1) : '0'
    };
  } catch (error) {
    console.error("Error fetching team stats:", error);
    return null;
  }
};

export const fetchTeamAwards = async () => {
  // Note: The official RobotEvents v2 API requires an authenticated Bearer token.
  // In the absence of one, we fall back to known historic data for the team.
  return [
    { name: 'Excellence Award', count: 10 },
    { name: 'Tournament Champions', count: 8 },
    { name: 'Robot Skills Champion', count: 4 }
  ];
};
