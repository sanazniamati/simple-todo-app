import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Task from "../../../../models/task";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTask: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Task.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "task updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const task = await Task.findOne({ _id: id });
  return NextResponse.json({ task }, { status: 200 });
}
