export const load = async ({ locals }) => {
  const students = await locals.pb.collection("students").getFullList();
  return {
    students,
  };
};
