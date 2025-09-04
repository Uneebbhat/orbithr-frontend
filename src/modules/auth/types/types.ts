export type Item = {
  empId: string;
  fullName: string;
  email: string;
  department: string;
  role: string;
  joinDate: Date | string;
  status: "Active" | "Inactive" | "Pending";
};
