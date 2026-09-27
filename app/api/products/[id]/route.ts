import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// 1. PUT: Edit Produk berdasarkan ID
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const { data, error } = await supabaseAdmin
      .from('products')
      .update({
        title: body.title,
        price: body.price,
        stock: body.stock,
      })
      .eq('id', id)
      .select();

    if (error) {
      return NextResponse.json(
        { success: false, message: 'Gagal mengupdate data', error_message: error.message },
        { status: 400, headers: corsHeaders }
      );
    }

    return NextResponse.json({ success: true, data: data[0] }, { status: 200, headers: corsHeaders });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err?.message || 'Server Error' }, { status: 500, headers: corsHeaders });
  }
}

// 2. DELETE: Hapus Produk berdasarkan ID
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { error } = await supabaseAdmin
      .from('products')
      .delete()
      .eq('id', id);

    if (error) {
      return NextResponse.json(
        { success: false, message: 'Gagal menghapus data', error_message: error.message },
        { status: 400, headers: corsHeaders }
      );
    }

    return NextResponse.json({ success: true, message: 'Produk berhasil dihapus!' }, { status: 200, headers: corsHeaders });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err?.message || 'Server Error' }, { status: 500, headers: corsHeaders });
  }
}