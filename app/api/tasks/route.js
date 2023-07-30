import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Task from "../../../models/task";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Task.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const tasks = await Task.find();
  return NextResponse.json({ tasks });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Task.findByIdAndDelete(id);
  return NextResponse.json({ message: "task deleted" }, { status: 200 });
}
